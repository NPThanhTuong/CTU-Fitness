"use client";

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@/components/midleExport";
import ServiceItem from "./ServiceItem";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ServiceTabs({ className }) {
	const [activeTab, setActiveTab] = useState("one-month");
	const data = [
		{
			label: "Gói 1 tháng",
			value: "one-month",
			image: "/images/training-image-02.jpg",
			benefits: [
				{
					desc: "Giá hợp lý",
				},
				{
					desc: "Thanh toán hàng tháng",
				},
				{
					desc: "Tập luyện không giới hạn thời gian",
				},
				{
					desc: "Gửi xe miễn phí",
				},
				{
					desc: "Lớp học miễn phí",
				},
				{
					desc: "Nước uống miễn phí",
				},
				{
					desc: "Buổi tập PT miễn phí",
				},
			],
		},
		{
			label: "Gói 6 tháng",
			value: "six-month",
			image: "/images/training-image-03.jpg",
			benefits: [
				{
					desc: "Giá hợp lý",
				},
				{
					desc: "Thanh toán hàng tháng",
				},
				{
					desc: "Tập luyện không giới hạn thời gian",
				},
				{
					desc: "Gửi xe miễn phí",
				},
				{
					desc: "Lớp học miễn phí",
				},
				{
					desc: "Nước uống miễn phí",
				},
				{
					desc: "Buổi tập PT miễn phí",
				},
			],
		},
		{
			label: "Gói 12 tháng",
			value: "twenty-month",
			image: "/images/training-image-04.jpg",
			benefits: [
				{
					desc: "Giá hợp lý",
				},
				{
					desc: "Thanh toán hàng tháng",
				},
				{
					desc: "Tập luyện không giới hạn thời gian",
				},
				{
					desc: "Gửi xe miễn phí",
				},
				{
					desc: "Lớp học miễn phí",
				},
				{
					desc: "Nước uống miễn phí",
				},
				{
					desc: "Buổi tập PT miễn phí",
				},
			],
		},
	];
	return (
		<>
			{/* Desktop */}
			<div
				className={twMerge("hidden lg:block w-full max-w-[980px]", className)}
			>
				<Tabs value={activeTab} orientation="vertical" className="flex gap-4">
					<TabsHeader className="w-60 bg-primary/80">
						{data.map(({ label, value }) => (
							<Tab
								key={value}
								value={value}
								onClick={() => setActiveTab(value)}
								className={twMerge(
									activeTab === value
										? "text-primary transition delay-200"
										: "text-white",
									"py-8 text-xl uppercase font-bold"
								)}
							>
								{label}
							</Tab>
						))}
					</TabsHeader>
					<TabsBody>
						{data.map(({ value, label, image, benefits }) => (
							<TabPanel key={value} value={value} className="py-0">
								<ServiceItem image={image} title={label} benefits={benefits} />
							</TabPanel>
						))}
					</TabsBody>
				</Tabs>
			</div>

			{/* Mobile */}
			<div className={twMerge("block lg:hidden w-full", className)}>
				<Tabs value={activeTab} className="flex flex-col gap-5">
					<TabsHeader className="w-full bg-primary/80">
						{data.map(({ label, value }) => (
							<Tab
								key={value}
								value={value}
								onClick={() => setActiveTab(value)}
								className={
									activeTab === value
										? "text-primary transition-all delay-200"
										: "text-white"
								}
							>
								{label}
							</Tab>
						))}
					</TabsHeader>
					<TabsBody>
						{data.map(({ value, label, image, benefits }) => (
							<TabPanel key={value} value={value} className="py-0">
								<ServiceItem image={image} title={label} benefits={benefits} />
							</TabPanel>
						))}
					</TabsBody>
				</Tabs>
			</div>
		</>
	);
}

export default ServiceTabs;
