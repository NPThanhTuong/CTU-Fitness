import prisma from "@/utils/prisma";

export async function GET(request, { params }) {
	const trainerId = parseInt(params.trainerId);

	try {
		const data = await prisma.business.findFirst({
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
					},
				},
				position: {
					select: {
						name: true,
						description: true,
					},
				},
			},
		});

		if (!data) return new Response("Trainer not found!", { status: 404 });

		await prisma.$disconnect();

		return Response.json(data);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch trainer", { status: 500 });
	}
}
