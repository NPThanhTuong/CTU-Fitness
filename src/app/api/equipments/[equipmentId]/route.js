import prisma from "@/utils/prisma";

export async function GET(request, { params }) {
	const equipmentId = parseInt(params.equipmentId);

	try {
		const data = await prisma.equipment.findFirst({
			where: {
				id: equipmentId,
			},
			include: {
				facility: true,
			},
		});

		if (!data) return new Response("Equipment not found!", { status: 404 });

		await prisma.$disconnect();

		return Response.json(data);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch equipment", { status: 500 });
	}
}
