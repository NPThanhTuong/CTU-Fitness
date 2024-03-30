import prisma from "@/utils/prisma";

export async function GET() {
	try {
		const data = await prisma.membershippackage.findMany({
			select: {
				coverImage: true,
				name: true,
				id: true,
				description: true,
				benefitonmembershippackage: {
					select: {
						benefit: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});

		await prisma.$disconnect();

		return Response.json(data);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch highlight equipment", { status: 500 });
	}
}
