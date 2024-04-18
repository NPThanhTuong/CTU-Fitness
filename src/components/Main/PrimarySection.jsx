import Image from "next/image";
import { twMerge } from "tailwind-merge";

function PrimarySection({ children, title, desc }) {
	return (
		<section className="w-full">
			<div className="container mx-auto flex flex-col justify-center items-center py-[100px] px-3 lg:py-[120px]">
				<h2 className="text-3xl text-gray-800 font-extrabold uppercase text-center">
					{title}
				</h2>
				<div className="flex justify-center">
					<Image
						src="/images/line-dec.png"
						width={40}
						height={40}
						alt="Line divider"
						className="my-5"
					/>
				</div>

				{desc && (
					<div className="flex justify-center">
						<p className="text-center text-sm text-gray-600 lg:max-w-[500px]">
							{desc}
						</p>
					</div>
				)}

				{children}
			</div>
		</section>
	);
}

export default PrimarySection;
