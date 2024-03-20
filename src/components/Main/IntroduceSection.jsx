import Link from "next/link";
import Button from "../Button";

function IntroduceSection() {
	return (
		<section className="w-full h-screen">
			<video className="size-full object-cover z-0" muted autoPlay loop>
				<source src="/videos/gym-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="absolute inset-0 bg-[#27313b]/70 z-1"></div>
			<div className=" absolute inset-0 z-2 flex justify-center items-center flex-col uppercase font-extrabold text-center text-white">
				<h3 className="text-lg lg:text-xl">work harder, get stronger</h3>
				<h2 className="text-7xl my-9 lg:text-8xl lg:my-10">
					easy with our <span className="text-primary">gym</span>
				</h2>
				<Link href="/signup">
					<Button className="bg-primary px-11 py-5 text-sm hover:scale-105 transition-all">
						Tham gia ngay
					</Button>
				</Link>
			</div>
		</section>
	);
}

export default IntroduceSection;
