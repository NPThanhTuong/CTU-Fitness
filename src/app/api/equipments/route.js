import prisma from "@/utils/prisma";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	let pageNum = parseInt(searchParams.get("page")) || 1;
	const typeSort = searchParams.get("typeSort");
	let data, count;
	const perPage = 8;

	if (pageNum < 1) pageNum = 1;
	try {
		if (!typeSort) {
			data = await prisma.equipment.findMany({
				where: {
					equipmentTypeId: parseInt(typeSort),
				},
				select: {
					id: true,
					distributor: true,
					origin: true,
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

			count = await prisma.equipment.aggregate({
				where: {
					equipmentTypeId: parseInt(typeSort),
				},
				_count: true,
			});
		} else {
			data = await prisma.equipment.findMany({
				// where: {
				// 	equipmentTypeId: typeSort,
				// },
				select: {
					id: true,
					distributor: true,
					origin: true,
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

			count = await prisma.equipment.aggregate({
				// where: {
				// 	equipmentTypeId: parseInt(typeSort),
				// },
				_count: true,
			});
		}

		await prisma.$disconnect();
		const totalPage = Math.ceil(count._count / perPage);
		return Response.json({ data, totalPage });
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch all equipments", { status: 500 });
	}
}
