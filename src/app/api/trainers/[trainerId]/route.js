import prisma from "@/utils/prisma";

export async function GET(request, { params }) {
	const trainerId = parseInt(params.trainerId);

	try {
		const trainer = await prisma.business.findFirst({
			where: {
				employeeId: trainerId,
				departmentId: 1,
			},
			include: {
				employee: {
					select: {
						fullname: true,
						email: true,
						phoneNumber: true,
						avatar: true,
						description: true,
					},
				},
				position: {
					select: {
						name: true,
					},
				},
			},
		});

		const relatedTrainers = await prisma.business.findMany({
			where: {
				departmentId: 1,
				positionId: trainer?.positionId,
				employeeId: {
					not: trainer?.employeeId,
				},
			},
			include: {
				position: {
					select: {
						name: true,
						description: true,
					},
				},
				employee: {
					select: {
						fullname: true,
						avatar: true,
					},
				},
			},
			take: 4,
		});

		if (!trainer) return new Response("Trainer not found!", { status: 404 });

		await prisma.$disconnect();

		return Response.json({ trainer, relatedTrainers });
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch trainer", { status: 500 });
	}
}
