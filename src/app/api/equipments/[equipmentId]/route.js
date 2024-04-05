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
						muscle: {
							select: {
								image: true,
								name: true,
							},
						},
					},
				},
				equipmentimage: {
					select: {
						pathName: true,
					},
				},
				equipmenttype: {
					select: {
						name: true,
					},
				},
			},
		});

		if (!equipment) {
			await prisma.$disconnect();
			return new Response("Equipment not found!", { status: 404 });
		}

		const relatedEquipments = await prisma.equipment.findMany({
			where: {
				id: {
					not: equipmentId,
				},
				equipmentTypeId: equipment?.equipmentTypeId,
			},
			select: {
				id: true,
				price: true,
				name: true,
				quantity: true,
				description: true,
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
			take: 4,
		});

		await prisma.$disconnect();

		return Response.json({ equipment, relatedEquipments });
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch equipment", { status: 500 });
	}
}
