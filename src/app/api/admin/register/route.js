import { saltRounds } from "@/utils/constants";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(request) {
	const res = await request.json();
	const { username, password } = res;

	try {
		const foundUser = await prisma.employeeaccount.findFirst({
			where: {
				username: username,
			},
		});

		if (foundUser) {
			return new Response("User is existing", { status: 409 });
		}

		const hash = bcrypt.hashSync(password, saltRounds);

		const newUser = await prisma.employeeaccount.create({
			data: {
				username: username,
				password: hash,
				roleId: 1,
			},
		});

		return Response.json({ message: "Register successfully!" });
	} catch (err) {
		console.log("There was error: ", err.message);
		await prisma.$disconnect();
		return new Response("Failed to register", { status: 500 });
	}
}
