import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcrypt";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "nguyenvana123",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = await prisma.employeeaccount.findFirst({
					where: {
						username: credentials.username,
					},
					select: {
						employee: {
							select: {
								avatar: true,
							},
						},
						roleId: true,
						username: true,
						password: true,
					},
				});

				await prisma.$disconnect();
				if (!user) {
					return null;
				}

				const match = await bcrypt.compare(credentials.password, user.password);
				if (!match) {
					return null;
				}

				return {
					name: user.username,
					image: user.employee.avatar,
				};
			},
		}),
	],
};
