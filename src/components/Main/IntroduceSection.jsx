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
				<h3 className="text-lg lg:text-xl">Chào mừng bạn đến với</h3>
				<h2 className="text-7xl my-7 lg:text-8xl lg:my-10">
					CTU <span className="text-primary">Fitness</span>
				</h2>
				<h3 className="text-lg lg:text-xl">Nơi Mọi Mục Tiêu Được Chinh Phục</h3>
				<Link href="/register-member" className="mt-16">
					<Button className="bg-primary px-11 py-5 text-sm hover:scale-105 transition-all">
						Tham gia ngay
					</Button>
				</Link>
			</div>
		</section>
	);
}

export default IntroduceSection;
