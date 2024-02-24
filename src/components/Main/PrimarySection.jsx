import Image from "next/image";

function PrimarySection({ children, title, desc }) {
	return (
		<section className="w-full">
			<div className="container mx-auto flex flex-col justify-center items-center py-[120px] px-3 lg:py-[146px]">
				<h2 className="text-2xl text-gray-800 font-extrabold uppercase">
					{title}
				</h2>
				<Image
					src="/images/line-dec.png"
					width={40}
					height={40}
					alt="Line divider"
					className="my-5"
				/>

				<p className="text-center text-sm text-gray-600 lg:max-w-[500px]">
					{desc}
				</p>
				{children}
			</div>
		</section>
	);
}

export default PrimarySection;
