"use client";

import FormEmployee from "@/components/Admin/FormEmployee";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@/components/midleExport";
import { updateEmployee } from "@/utils/formActions";
import { useState, useEffect } from "react";
function UpdateEmployee({ params }) {
	const { employeeId } = params;
	const [business, setBusiness] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getEmployee = async () => {
			setLoading(true);
			const res = await fetch(`/api/admin/employees/${employeeId}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			console.log(data);
			setLoading(false);

			if (res.ok) {
				setBusiness(data);
			}
		};

		getEmployee();
	}, [employeeId]);
	return (
		<div>
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<Typography variant="h5" color="blue-gray" className="mb-6 mt-2">
						Cập nhật thông tin của nhân viên
					</Typography>
				</CardHeader>
				<CardBody className="border-t-2">
					{loading ? (
						<p className="text-gray-400">Đang tải....</p>
					) : (
						<FormEmployee
							type="Cập nhật"
							action={updateEmployee}
							formId="updateEmployeeForm"
							business={business}
						/>
					)}
				</CardBody>
				<CardFooter>
					<hr />
					<div className="text-sm text-gray-400 text-center my-4">
						From CTU with love ❤️
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

export default UpdateEmployee;
