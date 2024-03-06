import Image from "next/image";

function BenefitItem({ image, title }) {
	return (
		<div className="flex flex-col items-center">
			<div className="size-[90px] rounded-full bg-primary flex justify-center items-center">
				<Image
					src={image}
					width={48}
					height={48}
					alt="Icon image"
					className="object-contain"
				/>
			</div>
			<h4 className="text-gray-800 text-sm font-semibold mt-4 text-center">
				{title}
			</h4>
		</div>
	);
}

export default BenefitItem;
