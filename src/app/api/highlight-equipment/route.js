import prisma from "@/utils/prisma";

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	let listHighlightId = searchParams.getAll("id");
	listHighlightId = listHighlightId.map((id) => parseInt(id));

	try {
		const data = await prisma.equipment.findMany({
			where: {
				id: {
					in: listHighlightId,
				},
			},
			select: {
				name: true,
				id: true,
				equipmentimage: {
					select: {
						pathName: true,
					},
					where: {
						pathName: {
							contains: "main",
						},
					},
				},
				equipmentonmuscle: {
					select: {
						muscle: {
							select: {
								name: true,
								image: true,
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
