import prisma from "@/utils/prisma";

export async function GET(request, { params }) {
	const equipmentId = parseInt(params.equipmentId);

	try {
		const equipment = await prisma.equipment.findFirst({
			where: {
				id: equipmentId,
			},
			include: {
				equipmentonmuscle: {
					select: {
						muscleName: true,
					},
				},
				equipmentimage: {
					select: {
						pathName: true,
					},
				},
				equipmenttype: true,
				facility: true,
			},
		});

		if (!equipment) {
			await prisma.$disconnect();
			return new Response("Equipment not found!", { status: 404 });
		}

		await prisma.$disconnect();

		return Response.json(equipment);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch equipment", { status: 500 });
	}
}
