import prisma from "@/utils/prisma";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	let pageNum = parseInt(searchParams.get("page")) || 1;
	const priceSort = searchParams.get("price") || "asc";
	const perPage = 8;

	if (pageNum < 1) pageNum = 1;

	try {
		const data = await prisma.equipment.findMany({
			orderBy: {
				price: priceSort,
			},
			skip: perPage * (pageNum - 1),
			take: perPage,
		});

		const count = await prisma.equipment.aggregate({
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
