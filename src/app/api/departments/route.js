import prisma from "@/utils/prisma";

export async function GET(request) {
	try {
		const data = await prisma.department.findMany({});

		await prisma.$disconnect();
		return Response.json(data);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch departments", { status: 500 });
	}
}
