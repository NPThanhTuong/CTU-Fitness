import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

function ServiceItem({ image, title, benefits }) {
	return (
		<div>
			<Image
				src={image}
				width={1000}
				height={1000}
				alt="Train service image"
				className="size-full object-cover rounded-md"
			/>

			<h3 className="font-bold text-2xl text-white uppercase mt-4 mb-2">
				{title}
			</h3>

			<ul className="text-white pl-4">
				{benefits.map((benefit, index) => (
					<li key={index} className="flex gap-3 my-3">
						<Image
							src="/images/icons/gym.png"
							width={24}
							height={24}
							alt="bullet list icon"
							className="size-auto"
						/>
						<span>{benefit.desc}</span>
					</li>
				))}
			</ul>
			<Link href="/register-member" className="flex justify-center">
				<Button size="lg" className="bg-primary hover:scale-105 mt-5">
					Đăng ký ngay
				</Button>
			</Link>
		</div>
	);
}

export default ServiceItem;
