import prisma from "@/utils/prisma";

export async function GET(request, { params }) {
	const employeeId = parseInt(params.employeeId);

	try {
		const data = await prisma.business.findFirst({
			where: {
				employeeId: employeeId,
			},
			select: {
				employeeId: true,
				businessDate: true,
				businessTypeId: true,
				employee: true,
				position: true,
				department: true,
				businesstype: true,
			},
		});

		await prisma.$disconnect();
		return Response.json(data);
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
		return new Response("Failed to fetch detail employee", { status: 500 });
	}
}
