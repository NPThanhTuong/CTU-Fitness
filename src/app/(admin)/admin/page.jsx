"use client";

import MetricsCard from "@/components/Admin/MetricsCard";
import TopHeader from "@/components/Admin/TopHeader";
import {
	ChartBarIcon,
	UserGroupIcon,
	CurrencyDollarIcon,
	UserPlusIcon,
} from "@heroicons/react/24/solid";

import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

function MainPage() {
	const metricsList = [
		{
			icon: <ChartBarIcon className="size-6 text-primary" />,
			title: "Thu nhập",
			metrics: "$293",
		},
		{
			icon: <UserGroupIcon className="size-6 text-primary" />,
			title: "Thành viên",
			metrics: "$293",
		},
		{
			icon: <CurrencyDollarIcon className="size-6 text-primary" />,
			title: "Tổng chi phí",
			metrics: "$293",
		},
		{
			icon: <UserPlusIcon className="size-6 text-primary" />,
			title: "Người đăng ký",
			metrics: "$293",
		},
	];
	const labels = ["Nov", "Dec", "Jan", "Feb", "Mar"];
	const dataEarning = {
		labels: labels,
		datasets: [
			{
				label: "Doanh thu",
				backgroundColor: "#ed563b",
				borderColor: "#ed563b",
				data: [0, 10, 5, 2, 20, 30, 45],
			},
			{
				label: "Lợi nhuận",
				backgroundColor: "#80d8fa",
				borderColor: "#80d8fa",
				data: [7, 13, 29, 23, 33, 20, 60],
			},
		],
	};
	const dataMembership = {
		labels: labels,
		datasets: [
			{
				label: "Hội viên",
				backgroundColor: "#ed563b",
				borderColor: "#ed563b",
				data: [0, 10, 5, 2, 20, 30, 45],
			},
			{
				label: "Vãng lai",
				backgroundColor: "#80d8fa",
				borderColor: "#80d8fa",
				data: [7, 13, 29, 23, 33, 20, 60],
			},
		],
	};

	return (
		<>
			<TopHeader
				href="/admin"
				textLink="Trang chủ"
				className="h-36 grid grid-cols-1 gap-4 lg:h-24 lg:flex lg:justify-between lg:items-center p-3"
			/>

			<div className="px-4 mt-2">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{metricsList.map((metricItem, index) => (
						<MetricsCard
							key={index}
							metrics={metricItem.metrics}
							title={metricItem.title}
							icon={metricItem.icon}
						/>
					))}
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
					<div className="bg-white rounded-lg shadow-md p-5">
						<div className="flex justify-between items-center mb-3">
							<h5 className="font-semibold text-lg">Thu nhập các tháng</h5>
							<div className="p-2 rounded-md bg-gray-100">
								<CurrencyDollarIcon className="size-7 text-primary" />
							</div>
						</div>
						<Line data={dataEarning} />
					</div>
					<div className="bg-white rounded-lg shadow-md p-5">
						<div className="flex justify-between items-center mb-3">
							<h5 className="font-semibold text-lg">Khách hàng hàng tháng</h5>
							<div className="p-2 rounded-md bg-gray-100">
								<UserGroupIcon className="size-7 text-primary" />
							</div>
						</div>
						<Bar data={dataMembership} />
					</div>
				</div>
			</div>
		</>
	);
}

export default MainPage;
