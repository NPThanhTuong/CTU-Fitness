"use client";

import CardItem from "@/components/CardItem";
import DefaultPagination from "@/components/DefaultPagination";
import TrainerList from "@/components/Main/TrainerList";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import { Breadcrumbs } from "@/components/midleExport";
import { priceSort } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function TrainersPage() {
	const [trainers, setTrainers] = useState([]);
	const [totalPage, setTotalPage] = useState(1);
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		const getTrainers = async () => {
			const res = await fetch(
				`/api/trainers?query=${params.get("query") || ""}&expSort=${
					params.get("expSort") || "asc"
				}&page=${params.get("page") || 1}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const { data, totalPage } = await res.json();
			console.log({ data, totalPage });
			setTrainers(data);
			setTotalPage(totalPage);
		};

		getTrainers();
	}, [params.get("query"), params.get("expSort"), params.get("page")]);
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
					{trainers.map((item) => (
						<CardItem
							key={item.employeeId}
							srcImg={`/images/${item.employee.avatar}`}
							category={item.position.name}
							title={item.employee.fullname}
							desc={item.employee.description}
							linkFb="#"
							linkTwitter="#"
							linkIg="#"
						/>
					))}
				</div>
				<div className="flex justify-center mt-10">
					<DefaultPagination totalPage={totalPage} />
				</div>
			</div>
		</main>
	);
}

export default TrainersPage;
