"use server";
import mime from "mime";
import { add } from "date-fns";
import prisma from "./prisma";
import { join } from "path";
import { writeFile } from "fs/promises";
import { redirect } from "next/navigation";

export async function createEquipment(formData) {
	const files = formData.getAll("equipmentImage");
	const uploadDir = join(process.cwd(), "public", "images");
	const expDate = add(formData.get("manufacturingDate"), {
		years: formData.get("shelfLife"),
	});
	const equipmentsOnMuscle = JSON.parse(formData.get("musclesOnEquipment"));

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

	// const newMuscleOnEquipent = await prisma.equipmentonmuscle.createMany({
	// 	data: [{

	// 	}]
	// })
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
	redirect("/admin/equipments");
}
