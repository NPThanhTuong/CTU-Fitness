import { twMerge } from "tailwind-merge";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Tooltip,
	Typography,
} from "@/components/midleExport";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
function CardItem({
	className,
	srcImg,
	category,
	title,
	desc,
	linkFb,
	linkTwitter,
	linkIg,
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
			<CardBody className="text-left p-6">
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
				<Typography
					className="text-gray-500 mt-4 line-clamp-4"
					variant="paragraph"
				>
					{desc}
				</Typography>
			</CardBody>
			<CardFooter className="flex flex-col gap-4 p-6 pt-0">
				<div className="flex justify-start gap-2">
					<Tooltip content="Like">
						<Typography as="a" href={linkFb}>
							<FacebookIcon />
						</Typography>
					</Tooltip>
					<Tooltip content="Follow">
						<Typography as="a" href={linkTwitter}>
							<TwitterIcon />
						</Typography>
					</Tooltip>
					<Tooltip content="Follow">
						<Typography as="a" href={linkIg}>
							<InstagramIcon />
						</Typography>
					</Tooltip>
				</div>
				<Link
					href="/trainers/idTrainer"
					className="text-primary hover:underline"
				>
					Chi tiết <span className="text-primary">&#10140;</span>
				</Link>
			</CardFooter>
		</Card>
	);
}

export default CardItem;
