"use client";
import CardItem from "@/components/CardItem";
import DefaultPagination from "@/components/DefaultPagination";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import { Breadcrumbs } from "@/components/midleExport";
import { priceSort } from "@/utils/constants";
import Link from "next/link";

function TrainersPage() {
	return (
		<main>
			<div className="h-[80px] bg-[#27313b]"></div>
			<div className="container mx-auto py-12 px-3">
				<Breadcrumbs>
					<Link href="/" className="opacity-60">
						Home
					</Link>
					<Link href="/trainers">Trainers</Link>
				</Breadcrumbs>
				<div className="flex flex-col my-8 gap-4 lg:flex-row">
					<Search className="relative flex w-full" label="Trainer name..." />
					<Sort sortValues={priceSort} label="Sort by price" />
				</div>

				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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

				<div className="flex justify-center mt-10">
					<DefaultPagination />
				</div>
			</div>
		</main>
	);
}

export default TrainersPage;
