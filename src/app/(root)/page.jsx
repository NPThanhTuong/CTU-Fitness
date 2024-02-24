import IntroduceSection from "@/components/Main/IntroduceSection";
import PrimarySection from "@/components/Main/PrimarySection";
import SecondarySection from "@/components/Main/SecondarySection";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Tooltip,
	Typography,
} from "@/components/midleExport";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<IntroduceSection />
			<PrimarySection
				title={
					<>
						Choose <span className="text-primary">program</span>
					</>
				}
				desc="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."
			>
				<ul className="grid grid-cols-1 gap-9 lg:grid-cols-2 mt-10 lg:gap-12 lg:mt-16">
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">Basic Fitness</h3>
							<p className="text-sm text-gray-600">
								Please do not re-distribute this template ZIP file on any
								template collection website. This is not allowed.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Discover More
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">
								Advanced Muscle Course
							</h3>
							<p className="text-sm text-gray-600">
								You may want to browse through Digital Marketing or Corporate
								HTML CSS templates on our website.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Discover More
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">Basic Fitness</h3>
							<p className="text-sm text-gray-600">
								Please do not re-distribute this template ZIP file on any
								template collection website. This is not allowed.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Discover More
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">
								Advanced Muscle Course
							</h3>
							<p className="text-sm text-gray-600">
								You may want to browse through Digital Marketing or Corporate
								HTML CSS templates on our website.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Discover More
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">Basic Fitness</h3>
							<p className="text-sm text-gray-600">
								Please do not re-distribute this template ZIP file on any
								template collection website. This is not allowed.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Discover More
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">
								Advanced Muscle Course
							</h3>
							<p className="text-sm text-gray-600">
								You may want to browse through Digital Marketing or Corporate
								HTML CSS templates on our website.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Discover More
							</Link>
						</div>
					</li>
				</ul>
			</PrimarySection>
			<SecondarySection />

			<PrimarySection
				title={
					<>
						Expert <span className="text-primary">Trainers</span>
					</>
				}
				desc="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
			>
				<ul className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-14">
					<li>
						<Card className="w-96">
							<CardHeader floated={false} className="h-72">
								<Image
									src="/images/first-trainer.jpg"
									width={300}
									height={300}
									alt="Trainer avatar"
									className="object-cover size-full"
								/>
							</CardHeader>
							<CardBody className="text-left">
								<Typography
									variant="h4"
									className="text-base text-primary font-semibold"
								>
									Strength Trainer
								</Typography>
								<Typography
									className="text-gray-800 text-xl font-semibold mt-2"
									variant="h4"
								>
									Bret D. Bowers
								</Typography>
								<Typography className="text-gray-500 mt-4" variant="paragraph">
									Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel.
								</Typography>
							</CardBody>
							<CardFooter className="flex justify-start gap-4 pt-2">
								<Tooltip content="Like">
									<Typography as="a" href="#facebook">
										<FacebookIcon />
									</Typography>
								</Tooltip>
								<Tooltip content="Follow">
									<Typography as="a" href="#twitter">
										<TwitterIcon />
									</Typography>
								</Tooltip>
								<Tooltip content="Follow">
									<Typography as="a" href="#instagram" variant="lead">
										<InstagramIcon />
									</Typography>
								</Tooltip>
							</CardFooter>
						</Card>
					</li>
					<li>
						<Card className="w-96">
							<CardHeader floated={false} className="h-72">
								<Image
									src="/images/second-trainer.jpg"
									width={300}
									height={300}
									alt="Trainer avatar"
									className="object-cover size-full"
								/>
							</CardHeader>
							<CardBody className="text-left">
								<Typography
									variant="h4"
									className="text-base text-primary font-semibold"
								>
									Strength Trainer
								</Typography>
								<Typography
									className="text-gray-800 text-xl font-semibold mt-2"
									variant="h4"
								>
									Bret D. Bowers
								</Typography>
								<Typography className="text-gray-500 mt-4" variant="paragraph">
									Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel.
								</Typography>
							</CardBody>
							<CardFooter className="flex justify-start gap-4 pt-2">
								<Tooltip content="Like">
									<Typography as="a" href="#facebook">
										<FacebookIcon />
									</Typography>
								</Tooltip>
								<Tooltip content="Follow">
									<Typography as="a" href="#twitter">
										<TwitterIcon />
									</Typography>
								</Tooltip>
								<Tooltip content="Follow">
									<Typography as="a" href="#instagram" variant="lead">
										<InstagramIcon />
									</Typography>
								</Tooltip>
							</CardFooter>
						</Card>
					</li>
					<li>
						<Card className="w-96">
							<CardHeader floated={false} className="h-72">
								<Image
									src="/images/third-trainer.jpg"
									width={300}
									height={300}
									alt="Trainer avatar"
									className="object-cover size-full"
								/>
							</CardHeader>
							<CardBody className="text-left">
								<Typography
									variant="h4"
									className="text-base text-primary font-semibold"
								>
									Strength Trainer
								</Typography>
								<Typography
									className="text-gray-800 text-xl font-semibold mt-2"
									variant="h4"
								>
									Bret D. Bowers
								</Typography>
								<Typography className="text-gray-500 mt-4" variant="paragraph">
									Bitters cliche tattooed 8-bit distillery mustache. Keytar
									succulents gluten-free vegan church-key pour-over seitan
									flannel.
								</Typography>
							</CardBody>
							<CardFooter className="flex justify-start gap-4 pt-2">
								<Tooltip content="Like">
									<Typography as="a" href="#facebook">
										<FacebookIcon />
									</Typography>
								</Tooltip>
								<Tooltip content="Follow">
									<Typography as="a" href="#twitter">
										<TwitterIcon />
									</Typography>
								</Tooltip>
								<Tooltip content="Follow">
									<Typography as="a" href="#instagram" variant="lead">
										<InstagramIcon />
									</Typography>
								</Tooltip>
							</CardFooter>
						</Card>
					</li>
				</ul>
				<Link
					href="/trainers"
					className="py-3 px-7 text-primary mt-10 rounded-md hover:scale-105 transition-all font-semibold ring-2 ring-primary"
				>
					Discover more
				</Link>
			</PrimarySection>
		</main>
	);
}
