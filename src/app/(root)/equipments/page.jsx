"use client";

import DefaultPagination from "@/components/DefaultPagination";
import EquipmentCard from "@/components/EquipmentCard";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import { Breadcrumbs } from "@/components/midleExport";
import { priceSort } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function EquipmentsPage() {
	const [equipments, setEquipments] = useState([]);
	const [totalPage, setTotalPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		const getTrainers = async () => {
			setLoading(true);
			const res = await fetch(
				`/api/equipments?query=${params.get("query") || ""}&priceSort=${
					params.get("priceSort") || "asc"
				}&page=${params.get("page") || 1}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const { data, totalPage } = await res.json();
			setLoading(false);
			setEquipments(data);
			setTotalPage(totalPage);
		};

		getTrainers();
	}, [params.get("query"), params.get("priceSort"), params.get("page")]);
	return (
		<main>
			<div className="h-[80px] bg-[#27313b]"></div>
			<div className="container mx-auto py-12 px-3">
				<Breadcrumbs>
					<Link href="/" className="opacity-60">
						Trang chủ
					</Link>
					<Link href="/equipments">Thiết bị</Link>
				</Breadcrumbs>
				<div className="flex flex-col my-8 gap-4 lg:flex-row">
					<Search className="relative flex w-full" label="Tên thiết bị..." />
					<Sort
						sortValues={priceSort}
						label="Lọc theo giá"
						sortType="priceSort"
					/>
				</div>

				{loading ? (
					<h3 className="text-3xl text-gray-500 font-bold text-center">
						Đang tìm kiếm...
					</h3>
				) : equipments.length > 0 ? (
					<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
						{equipments.map((item) => (
							<EquipmentCard
								key={item?.id}
								id={item?.id}
								category={item?.equipmenttype?.name}
								title={item?.name}
								quantity={item?.quantity}
								price={item?.price}
								srcImg={`/images/${item?.equipmentimage[0]?.pathName}`}
							/>
						))}
					</div>
				) : (
					<h3 className="text-3xl text-gray-500 font-bold text-center">
						Không tìm thấy thiết bị phù hợp.
					</h3>
				)}
				<div className="flex justify-center mt-10">
					<DefaultPagination totalPage={totalPage} />
				</div>
			</div>
		</main>
	);
}

export default EquipmentsPage;
