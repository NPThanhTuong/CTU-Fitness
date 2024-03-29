import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const position1 = await prisma.position.create({
		data: {
			name: "Huấn luyện viên sức mạnh",
			description:
				"Huấn luyện viên sẽ hướng dẫn bạn tập luyện một cách chính xác và an toàn, giúp giảm nguy cơ chấn thương. Giúp người tập đạt được mục tiêu về thể chất mong muốn, cụ thể là tăng cường sức mạnh và kích thước cơ bắp",
		},
	});
	const position2 = await prisma.position.create({
		data: {
			name: "Huấn luyện viên dinh dưỡng",
			description:
				"Hỗ trợ người tập cải thiện sức khỏe, thể trạng và đạt được mục tiêu dinh dưỡng thông qua việc xây dựng và điều chỉnh chế độ ăn uống phù hợp.",
		},
	});

	const position3 = await prisma.position.create({
		data: {
			name: "Huấn luyện viên dẻo dai",
			description:
				"Chuyên hướng dẫn và hỗ trợ người tập cải thiện độ dẻo dai của cơ thể thông qua các bài tập và kỹ thuật phù hợp, tăng cường phạm vi chuyển động của khớp.",
		},
	});

	const department1 = await prisma.businessType.create({
		data: {
			name: "Bộ phận huấn luyện",
			description: "Chịu trách nhiệm quản lý các huấn luyện viên",
		},
	});

	const department2 = await prisma.businessType.create({
		data: {
			name: "Bộ phận tư vấn",
			description: "Chịu trách nhiệm quản lý các nhân viên tư vấn và lễ tân",
		},
	});

	const department3 = await prisma.businessType.create({
		data: {
			name: "Bộ phận quản trị",
			description: "Chịu trách quản lý các hoạt động của hệ thống",
		},
	});

	const businessType1 = await prisma.businessType.create({
		data: {
			name: "Cơ hữu",
			description: "Những nhân viên có ký hợp đồng làm việc dài hạn.",
		},
	});
	const businessType2 = await prisma.businessType.create({
		data: {
			name: "Thời vụ",
			description: "Nhân viên tham gia làm việc 1 khoảng thời gian nhất định",
		},
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
