import prisma from "@/utils/prisma";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	let pageNum = parseInt(searchParams.get("page")) || 1;
	const nameSearch = searchParams.get("query") || "";
	const expSort = searchParams.get("expSort") || "asc";

	const perPage = 2;

	if (pageNum < 1) pageNum = 1;

	try {
		const data = await prisma.business.findMany({
			where: {
				departmentId: 1,
				employee: {
					fullname: {
						contains: nameSearch,
					},
				},
			},
			orderBy: {
				employee: {
					experience: expSort,
				},
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
			skip: perPage * (pageNum - 1),
			take: perPage,
		});

		const count = await prisma.business.aggregate({
			where: {
				departmentId: 1,
				employee: {
					fullname: {
						contains: nameSearch,
					},
				},
			},
			_count: true,
		});
		const totalPage = Math.ceil(count._count / perPage);
		await prisma.$disconnect();

		return Response.json({ data, totalPage });
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch all trainers", { status: 500 });
	}
}
