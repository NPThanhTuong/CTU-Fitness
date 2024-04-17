import prisma from "@/utils/prisma";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	let pageNum = parseInt(searchParams.get("page")) || 1;
	// const priceSort = searchParams.get("priceSort") || "asc";
	const nameSearch = searchParams.get("query") || "";
	const perPage = 4;

	if (pageNum < 1) pageNum = 1;

	try {
		const data = await prisma.business.findMany({
			where: {
				employee: {
					fullname: {
						contains: nameSearch,
					},
				},
			},
			select: {
				employeeId: true,
				businessDate: true,
				businessTypeId: true,
				employee: {
					select: {
						fullname: true,
						email: true,
						avatar: true,
						phoneNumber: true,
					},
				},
				position: {
					select: {
						name: true,
					},
				},
				department: {
					select: {
						name: true,
					},
				},
				businesstype: {
					select: {
						name: true,
					},
				},
			},
			skip: perPage * (pageNum - 1),
			take: perPage,
		});

		const count = await prisma.employee.aggregate({
			where: {
				fullname: {
					contains: nameSearch,
				},
			},
			_count: true,
		});

		await prisma.$disconnect();
		const totalPage = Math.ceil(count._count / perPage);
		return Response.json({ data, totalPage });
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch all employees", { status: 500 });
	}
}
