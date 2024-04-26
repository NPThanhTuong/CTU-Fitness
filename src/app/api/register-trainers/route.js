import prisma from "@/utils/prisma";

export async function GET(request) {
	try {
		const data = await prisma.business.findMany({
			where: {
				departmentId: 1,
			},
			include: {
				employee: {
					select: {
						fullname: true,
						experience: true,
						avatar: true,
						phoneNumber: true,
						email: true,
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

		await prisma.$disconnect();

		return Response.json({ data });
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch register trainers", { status: 500 });
	}
}
