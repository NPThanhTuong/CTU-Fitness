"use client";

import Button from "@/components/Button";
import CardItem from "@/components/CardItem";
import {
	Breadcrumbs,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Carousel,
	IconButton,
	Typography,
} from "@/components/midleExport";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

function DetailTrainerPage({ params }) {
	const { trainerId } = params;
	//Tim trainer trong database
	const trainer = {
		name: "Nguyen Phan Thanh Tuong",
		trainerType: "Flexible trainer",
		age: 21,
		desc: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
	};
	// Neu tim k được thi hien trang not found

	return (
		<main>
			<div className="h-[80px] bg-[#27313b]"></div>
			<div className="container mx-auto py-12 px-3">
				<Breadcrumbs>
					<Link href="/" className="opacity-60">
						Home
					</Link>
					<Link href="/trainers" className="opacity-60">
						Trainers
					</Link>
					<Link href={`/trainers/${trainerId}`}>{trainerId}</Link>
				</Breadcrumbs>

				<div className="bg-white shadow-lg px-6 py-8 rounded-lg mt-8">
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
						<Carousel
							loop
							className="rounded-lg"
							prevArrow={({ handlePrev }) => (
								<IconButton
									variant="text"
									color="white"
									size="lg"
									onClick={handlePrev}
									className="!absolute top-2/4 left-4 -translate-y-2/4"
								>
									<ArrowLeftIcon width="2rem" height="2rem" />
								</IconButton>
							)}
							nextArrow={({ handleNext }) => (
								<IconButton
									variant="text"
									color="white"
									size="lg"
									onClick={handleNext}
									className="!absolute top-2/4 !right-4 -translate-y-2/4"
								>
									<ArrowRightIcon width="2rem" height="2rem" />
								</IconButton>
							)}
							navigation={({ setActiveIndex, activeIndex, length }) => (
								<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
									{new Array(length).fill("").map((_, i) => (
										<span
											key={i}
											className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
												activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
											}`}
											onClick={() => setActiveIndex(i)}
										/>
									))}
								</div>
							)}
						>
							<Image
								src="/images/first-trainer.jpg"
								alt="image 1"
								width={1000}
								height={1000}
								className="h-full w-full object-cover"
							/>
							<Image
								src="/images/second-trainer.jpg"
								alt="image 2"
								width={1000}
								height={1000}
								className="h-full w-full object-cover"
							/>
							<Image
								src="/images/third-trainer.jpg"
								alt="image 3"
								width={1000}
								height={1000}
								className="h-full w-full object-cover"
							/>
						</Carousel>

						<div className="mt-4">
							<h3 className="font-bold text-xl">{trainer.name}</h3>
							<h4 className="text-primary mt-1">{trainer.trainerType}</h4>

							<h5 className="mt-4 text-2xl font-bold">Descriptions</h5>
							<p className="mt-1 text-gray-800">{trainer.desc}</p>

							<div className="flex justify-center lg:justify-start">
								<Button className="bg-primary hover:scale-105 mt-5">
									Booking now
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white shadow-lg p-6 rounded-lg mt-8 lg:p-8">
					<h4 className="text-3xl font-bold">Related trainer</h4>
					{/* Mobile */}
					<div className="w-full flex gap-4 snap-x overflow-x-auto pb-9 mt-4 lg:hidden">
						<div className="snap-start snap-always shrink-0 first:pl-3 last:pr-3">
							<div className="w-80 h-36 shadow-md p-3 flex gap-3 justify-center items-center">
								<div className="flex justify-center items-center">
									<Image
										src="/images/first-trainer.jpg"
										width={110}
										height={110}
										alt="Trainer info"
										className="rounded-md"
									/>
								</div>

								<div className="flex flex-col flex-1 overflow-hidden justify-center">
									<h5 className="text-lg font-semibold">Thanh Tuong</h5>
									<p className="line-clamp-2  text-gray-800">
										Some describe about trainer or trainer's qualification for
										user can see
									</p>
									<Link
										href={`/trainers/trainerId`}
										className="text-primary hover:underline"
									>
										See more
									</Link>
								</div>
							</div>
						</div>
						<div className="snap-start snap-always shrink-0 first:pl-3 last:pr-3">
							<div className="w-80 h-36 shadow-md p-3 flex gap-3 justify-center items-center">
								<div className="flex justify-center items-center">
									<Image
										src="/images/first-trainer.jpg"
										width={110}
										height={110}
										alt="Trainer info"
										className="rounded-md"
									/>
								</div>

								<div className="flex flex-col flex-1 overflow-hidden justify-center">
									<h5 className="text-lg font-semibold">Thanh Tuong</h5>
									<p className="line-clamp-2  text-gray-800">
										Some describe about trainer or trainer's qualification for
										user can see
									</p>
									<Link
										href={`/trainers/trainerId`}
										className="text-primary hover:underline"
									>
										See more
									</Link>
								</div>
							</div>
						</div>
						<div className="snap-start snap-always shrink-0 first:pl-3 last:pr-3">
							<div className="w-80 h-36 shadow-md p-3 flex gap-3 justify-center items-center">
								<div className="flex justify-center items-center">
									<Image
										src="/images/first-trainer.jpg"
										width={110}
										height={110}
										alt="Trainer info"
										className="rounded-md"
									/>
								</div>

								<div className="flex flex-col flex-1 overflow-hidden justify-center">
									<h5 className="text-lg font-semibold">Thanh Tuong</h5>
									<p className="line-clamp-2  text-gray-800">
										Some describe about trainer or trainer's qualification for
										user can see
									</p>
									<Link
										href={`/trainers/trainerId`}
										className="text-primary hover:underline"
									>
										See more
									</Link>
								</div>
							</div>
						</div>
						<div className="snap-start snap-always shrink-0 first:pl-3 last:pr-3">
							<div className="w-80 h-36 shadow-md p-3 flex gap-3 justify-center items-center">
								<div className="flex justify-center items-center">
									<Image
										src="/images/first-trainer.jpg"
										width={110}
										height={110}
										alt="Trainer info"
										className="rounded-md"
									/>
								</div>

								<div className="flex flex-col flex-1 overflow-hidden justify-center">
									<h5 className="text-lg font-semibold">Thanh Tuong</h5>
									<p className="line-clamp-2  text-gray-800">
										Some describe about trainer or trainer's qualification for
										user can see
									</p>
									<Link
										href={`/trainers/trainerId`}
										className="text-primary hover:underline"
									>
										See more
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Desktop */}
					<div className="hidden lg:grid lg:gap-4 lg:grid-cols-4">
						<CardItem
							className=""
							srcImg="/images/first-trainer.jpg"
							category="Flexible Trainer"
							title="Thanh Tuong"
							desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel."
							linkFb="#"
							linkTwitter="#"
							linkIg="#"
						/>
						<CardItem
							className=""
							srcImg="/images/first-trainer.jpg"
							category="Flexible Trainer"
							title="Thanh Tuong"
							desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel."
							linkFb="#"
							linkTwitter="#"
							linkIg="#"
						/>
						<CardItem
							className=""
							srcImg="/images/first-trainer.jpg"
							category="Flexible Trainer"
							title="Thanh Tuong"
							desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel."
							linkFb="#"
							linkTwitter="#"
							linkIg="#"
						/>
						<CardItem
							className=""
							srcImg="/images/first-trainer.jpg"
							category="Flexible Trainer"
							title="Thanh Tuong"
							desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel."
							linkFb="#"
							linkTwitter="#"
							linkIg="#"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

export default DetailTrainerPage;
