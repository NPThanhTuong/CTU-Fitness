import Image from "next/image";
import Button from "../Button";

function SecondarySection() {
	return (
		<section className="w-full relative h-[400px]">
			<div className="absolute z-0 inset-0">
				<img
					src="/images/cta-bg.jpg"
					alt="section image"
					className="size-full object-cover"
					loading="lazy"
				/>
			</div>
			<div className="absolute inset-0 z-1 flex flex-col justify-center items-center py-[120px] px-3 lg:py-[146px]">
				<div className="container mx-auto flex flex-col justify-center items-center">
					<h2 className="uppercase text-white text-4xl font-bold text-center">
						Don&apos;t <span className="text-primary">think</span>, begin{" "}
						<span className="text-primary">today!</span>
					</h2>
					<p className="text-white text-center max-w-[800px] my-7">
						Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
						ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris
						a nisi luctus imperdiet.
					</p>
					<Button className="bg-primary hover:scale-105 transition-all">
						Become a member
					</Button>
				</div>
			</div>
		</section>
	);
}

export default SecondarySection;
