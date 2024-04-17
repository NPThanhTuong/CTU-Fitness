import FormEmployee from "@/components/Admin/FormEmployee";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@/components/midleExport";
import { createEmployee } from "@/utils/formActions";

function CreateEmployee() {
	return (
		<div>
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<Typography variant="h5" color="blue-gray" className="mb-6 mt-2">
						Thêm một nhân viên mới vào hệ thống
					</Typography>
				</CardHeader>
				<CardBody className="border-t-2">
					<FormEmployee
						type="Thêm"
						action={createEmployee}
						formId="createEmployeeForm"
					/>
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

export default CreateEmployee;
