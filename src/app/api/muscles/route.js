import prisma from "@/utils/prisma";

export async function GET(request) {
	try {
		const data = await prisma.muscle.findMany({});

		await prisma.$disconnect();
		return Response.json(data);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch muscles", { status: 500 });
	}
}
