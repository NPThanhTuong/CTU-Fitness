import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
} from "@/components/midleExport";
import { createUser } from "@/utils/formActions";
import Link from "next/link";

function CreateUser() {
	return (
		<div>
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<Typography variant="h5" color="blue-gray" className="mb-6 mt-2">
						Đăng ký hội viên cho khách hàng
					</Typography>
				</CardHeader>
				<CardBody className="border-t-2">
					<form
						action={createUser}
						className="grid grid-col-1 lg:grid-cols-2 gap-5"
					>
						<div>
							<label htmlFor="email4" className="text-gray">
								Email:
							</label>
							<Input
								id="email4"
								type="email"
								placeholder="Vd: abcdef@gmail.com"
								color="deep-orange"
								className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
								labelProps={{
									className: "hidden",
								}}
							/>
						</div>
						<div>
							<label htmlFor="name4" className="text-gray">
								Họ và tên:
							</label>
							<Input
								id="name4"
								type="text"
								placeholder="Vd: Nguyễn Văn A"
								color="deep-orange"
								className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
								labelProps={{
									className: "hidden",
								}}
							/>
						</div>
						<div>
							<label htmlFor="tel4" className="text-gray">
								Số điện thoại:
							</label>
							<Input
								id="tel4"
								type="tel"
								placeholder="Vd: 0972468262"
								color="deep-orange"
								className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
								labelProps={{
									className: "hidden",
								}}
							/>
						</div>
						<div>
							<label htmlFor="tel4" className="text-gray">
								Ngày sinh:
							</label>
							<Input
								id="tel4"
								type="text"
								placeholder="Vd: 1/2/2032"
								color="deep-orange"
								className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
								labelProps={{
									className: "hidden",
								}}
							/>
						</div>
					</form>
				</CardBody>
				<CardFooter></CardFooter>
			</Card>
		</div>
	);
}

export default CreateUser;
