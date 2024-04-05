"use server";
import mime from "mime";
import { add, format, parse } from "date-fns";
import prisma from "./prisma";
import path, { join } from "path";
import { unlink, writeFile } from "fs/promises";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createEquipment(formData) {
	const files = formData.getAll("equipmentImage");
	const uploadDir = join(process.cwd(), "public", "images");
	const expDate = add(formData.get("manufacturingDate"), {
		years: formData.get("shelfLife"),
	});
	const equipmentsOnMuscle = JSON.parse(formData.get("musclesOnEquipment"));

	try {
		const newEquipment = await prisma.equipment.create({
			data: {
				name: formData.get("name"),
				importDate: new Date(formData.get("importDate")),
				manufacturingDate: new Date(formData.get("manufacturingDate")),
				shelfLife: parseInt(formData.get("shelfLife")),
				origin: formData.get("origin"),
				price: parseInt(formData.get("price")),
				distributor: formData.get("distributor"),
				quantity: parseInt(formData.get("quantity")),
				status: formData.get("status") === "true",
				description: formData.get("description"),
				expiryDate: new Date(expDate),
				equipmenttype: {
					connect: {
						id: parseInt(formData.get("equipmentType")),
					},
				},
				equipmentonmuscle: {
					createMany: {
						data: equipmentsOnMuscle,
					},
				},
				facility: {
					connect: {
						id: parseInt(formData.get("facility")),
					},
				},
			},
		});

		// Xử lý file ảnh tải lên
		files.forEach(async (file, index) => {
			const buffer = Buffer.from(await file.arrayBuffer());
			const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
			const filename = `${file.name.replace(
				/\.[^/.]+$/,
				""
			)}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
			const equipmentImage = await prisma.equipmentimage.create({
				data: {
					pathName: filename,
					equipment: {
						connect: {
							id: newEquipment.id,
						},
					},
				},
			});
			await writeFile(`${uploadDir}/${filename}`, buffer);
		});

		await prisma.$disconnect();
	} catch (err) {
		await prisma.$disconnect();
		console.log(err);
	}
	redirect("/admin/equipments");
}

export async function updateEquipment(formData) {
	const files = formData.getAll("equipmentImage");
	const equipmentId = parseInt(formData.get("id"));
	const uploadDir = join(process.cwd(), "public", "images");

	const equipmentsOnMuscle = JSON.parse(formData.get("musclesOnEquipment"));
	const manufacturingDate = parse(
		formData.get("manufacturingDate"),
		"dd/MM/yyyy",
		new Date()
	);
	const importDate = parse(
		formData.get("importDate"),
		"dd/MM/yyyy",
		new Date()
	);
	const expDate = add(importDate, {
		years: formData.get("shelfLife"),
	});

	try {
		// Xóa hết các equipmentOnMuscle của thiết bị cần chỉnh sửa.
		const deletedMuscleCount = await prisma.equipmentonmuscle.deleteMany({
			where: {
				equipmentId: equipmentId,
			},
		});

		//Cập nhật lại thiết bị
		const updateEquipment = await prisma.equipment.update({
			where: {
				id: equipmentId,
			},
			data: {
				name: formData.get("name"),
				importDate: importDate,
				manufacturingDate: manufacturingDate,
				shelfLife: parseInt(formData.get("shelfLife")),
				origin: formData.get("origin"),
				price: parseInt(formData.get("price")),
				distributor: formData.get("distributor"),
				quantity: parseInt(formData.get("quantity")),
				status: formData.get("status") === "true",
				description: formData.get("description"),
				expiryDate: new Date(expDate),
				equipmenttype: {
					connect: {
						id: parseInt(formData.get("equipmentType")),
					},
				},
				equipmentonmuscle: {
					createMany: {
						data: equipmentsOnMuscle,
					},
				},
				facility: {
					connect: {
						id: parseInt(formData.get("facility")),
					},
				},
			},
		});

		if (files.length > 0 && files[0].size > 0) {
			// Xử lý file ảnh tải lên
			files.forEach(async (file, index) => {
				const buffer = Buffer.from(await file.arrayBuffer());
				const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
				const filename = `${file.name.replace(
					/\.[^/.]+$/,
					""
				)}-${uniqueSuffix}.${mime.getExtension(file.type)}`;

				const equipmentImage = await prisma.equipmentimage.create({
					data: {
						pathName: filename,
						equipment: {
							connect: {
								id: updateEquipment.id,
							},
						},
					},
				});
				await writeFile(`${uploadDir}/${filename}`, buffer);
			});
		}

		await prisma.$disconnect();
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
	}

	redirect("/admin/equipments");
}

export async function deleteImage(pathName) {
	// const revalidatePathStr = formData.get("revalidatePath");
	const imgPath = join(process.cwd(), "public", "images", pathName);

	try {
		const deleteImage = await prisma.equipmentimage.delete({
			where: {
				pathName: pathName,
			},
		});

		await prisma.$disconnect();

		await unlink(imgPath);

		console.log(`Successfully deleted ${imgPath}`);
	} catch (error) {
		console.error("There was an error:", error.message);
		await prisma.$disconnect();
	}
	revalidatePath("/(admin)/admin/equipments/[equipmentId]/edit", "page");
}

export async function deleteEquipment(equipmentId) {
	try {
		// Xóa các hình ảnh liên quan đến thiết bị
		const deleteImage = prisma.equipmentimage.deleteMany({
			where: {
				equipmentId: equipmentId,
			},
		});

		// Xóa các nhóm cơ bổ trợ của thiết bị
		const deleteMuscle = prisma.equipmentonmuscle.deleteMany({
			where: {
				equipmentId: equipmentId,
			},
		});

		// Xóa danh sách lần sửa chữa của thiết bị (chưa làm)
		const deleteCorrection = prisma.correction.deleteMany({
			where: {
				equipmentId: equipmentId,
			},
		});

		//Xóa danh sách các bài tập của thiết bị (chưa làm)
		const deleteExercise = prisma.exerciseonequipment.deleteMany({
			where: {
				equipmentId: equipmentId,
			},
		});

		//Xóa thiết bị
		const deleteEquipment = prisma.equipment.delete({
			where: {
				id: equipmentId,
			},
		});
		const transaction = await prisma.$transaction([
			deleteImage,
			deleteMuscle,
			deleteCorrection,
			deleteExercise,
			deleteEquipment,
		]);
		await prisma.$disconnect();
		revalidatePath("/(admin)/admin/equipments", "page");
	} catch (err) {
		console.error("There was an error: ", err.message);
		await prisma.$disconnect();
	}
}
