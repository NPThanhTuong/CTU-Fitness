"use client";

import FormDeleteImages from "@/components/Admin/FormDeleteImage";
import FormEquipment from "@/components/Admin/FormEquipment";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@/components/midleExport";
import { updateEquipment } from "@/utils/formActions";
import { useEffect, useState } from "react";

function EditEquipment({ params }) {
	const { equipmentId } = params;
	const [equipment, setEquipment] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getEquipment = async () => {
			setLoading(true);
			const res = await fetch(`/api/admin/equipments/${equipmentId}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			console.log(data);
			setLoading(false);
			if (res.ok) {
				setEquipment(data);
			}
		};

		getEquipment();
	}, [equipmentId]);
	return (
		<div>
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<Typography variant="h5" color="blue-gray" className="mb-6 mt-2">
						Chỉnh sửa thông một thiết bị trong hệ thống
					</Typography>
				</CardHeader>
				<CardBody className="border-t-2">
					{loading ? (
						<p>Đang tải....</p>
					) : equipment ? (
						<FormEquipment
							type="Chỉnh sửa"
							action={updateEquipment}
							equipment={equipment}
							formId="updateEquipmentForm"
						/>
					) : (
						<p>Không tìm thấy thiết bị.</p>
					)}
				</CardBody>
				<CardFooter>
					<hr />
					<div className="text-sm text-gray-400 text-center my-4">
						Made with love
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

export default EditEquipment;
