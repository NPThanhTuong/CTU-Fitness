import Image from "next/image";

function IntroduceItem({ image, title, desc }) {
	return (
		<div className="flex flex-col gap-3 justify-between items-start lg:flex-row lg:even:flex-row-reverse">
			<Image
				src={image}
				width={560}
				height={560}
				className="object-contain rounded-md"
				alt="Introduce image"
			/>
			<div className="flex-1 max-w-[560px] p-4 text-white bg-primary rounded-md">
				<h4 className="text-xl font-bold uppercase">{title}</h4>
				<p className=" text-sm mt-4">{desc}</p>
			</div>
		</div>
	);
}

export default IntroduceItem;
