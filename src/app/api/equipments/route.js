import prisma from "@/utils/prisma";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	let pageNum = parseInt(searchParams.get("page")) || 1;
	const priceSort = searchParams.get("priceSort") || "asc";
	const nameSearch = searchParams.get("query") || "";
	const perPage = 4;

	if (pageNum < 1) pageNum = 1;

	try {
		const data = await prisma.equipment.findMany({
			where: {
				name: {
					contains: nameSearch,
				},
			},
			orderBy: {
				price: priceSort,
			},
			select: {
				id: true,
				price: true,
				name: true,
				quantity: true,
				equipmentimage: {
					select: {
						pathName: true,
					},
					where: {
						pathName: {
							not: {
								contains: "main",
							},
						},
					},
					take: 1,
				},
				equipmenttype: {
					select: {
						name: true,
					},
				},
			},
			skip: perPage * (pageNum - 1),
			take: perPage,
		});

		const count = await prisma.equipment.aggregate({
			where: {
				name: {
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
		return new Response("Failed to fetch all equipments", { status: 500 });
	}
}
