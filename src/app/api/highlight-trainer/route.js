import prisma from "@/utils/prisma";

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	let listHighlightId = searchParams.getAll("id");
	listHighlightId = listHighlightId.map((id) => parseInt(id));

	try {
		const data = await prisma.business.findMany({
			where: {
				AND: [
					{
						employeeId: {
							in: listHighlightId,
						},
					},
					{
						departmentId: 1,
					},
				],
			},
			select: {
				employee: {
					select: {
						fullname: true,
						avatar: true,
						id: true,
					},
				},
				position: {
					select: {
						name: true,
						description: true,
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
