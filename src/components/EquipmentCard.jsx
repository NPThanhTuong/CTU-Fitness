import { twMerge } from "tailwind-merge";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from "@/components/midleExport";
import Image from "next/image";
import Link from "next/link";
function EquipmentCard({
	id,
	className,
	srcImg,
	category,
	title,
	quantity,
	origin,
}) {
	return (
		<Card className={twMerge("", className)}>
			<CardHeader floated={false} className="h-52 lg:h-72">
				<Image
					src={srcImg}
					width={300}
					height={300}
					alt="Trainer avatar"
					className="object-cover size-full"
				/>
			</CardHeader>
			<CardBody className="text-left p-6 flex-1">
				<Typography
					variant="h4"
					className="text-base text-primary font-semibold"
				>
					{category}
				</Typography>
				<Typography
					className="text-gray-800 text-xl font-semibold mt-2"
					variant="h4"
				>
					{title}
				</Typography>
			</CardBody>
			<CardFooter className="flex flex-col gap-4 p-6 pt-0">
				<div className="font-semibold">
					<p className="text-gray-800">Số lượng: {quantity}</p>
					<p className="text-gray-800 mt-2">Xuất xứ: {origin}</p>
				</div>
				<Link
					href={`/equipments/${id}`}
					className="text-primary hover:underline"
				>
					Chi tiết <span className="text-primary">&#10140;</span>
				</Link>
			</CardFooter>
		</Card>
	);
}

export default EquipmentCard;
