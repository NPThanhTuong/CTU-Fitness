import FormEquipment from "@/components/Admin/FormEquipment";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@/components/midleExport";
import { createEquipment } from "@/utils/formActions";

function CreateEquipment() {
	return (
		<div>
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<Typography variant="h5" color="blue-gray" className="mb-6 mt-2">
						Thêm một thiết bị mới vào hệ thống
					</Typography>
				</CardHeader>
				<CardBody className="border-t-2">
					<FormEquipment
						type="Thêm"
						action={createEquipment}
						formId="createEquipmentForm"
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

export default CreateEquipment;
