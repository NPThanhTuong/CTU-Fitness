"use client";

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@/components/midleExport";
import ServiceItem from "./ServiceItem";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function ServiceTabs({ className }) {
	const [activeTab, setActiveTab] = useState(1);
	const [membershipPackages, setMembershipPackages] = useState([]);

	useEffect(() => {
		const getMembershipPackages = async () => {
			const res = await fetch("/api/service-packages", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			console.log({ data });
			setMembershipPackages(data);
		};

		getMembershipPackages();
	}, []);

	return (
		<>
			{/* Desktop */}
			<div
				className={twMerge("hidden lg:block w-full max-w-[980px]", className)}
			>
				<Tabs value={activeTab} orientation="vertical" className="flex gap-4">
					<TabsHeader className="w-60 bg-primary/100">
						{membershipPackages.map(({ name, id }) => (
							<Tab
								key={id}
								value={id}
								onClick={() => setActiveTab(id)}
								className={twMerge(
									activeTab === id
										? "text-primary transition delay-200"
										: "text-white",
									"py-8 text-xl uppercase font-bold"
								)}
							>
								{name}
							</Tab>
						))}
					</TabsHeader>
					<TabsBody>
						{membershipPackages.map(
							({ id, name, coverImage, benefitOnMembershipPackages }) => (
								<TabPanel key={id} value={id} className="py-0">
									<ServiceItem
										image={`/images/${coverImage}`}
										title={name}
										benefits={benefitOnMembershipPackages}
									/>
								</TabPanel>
							)
						)}
					</TabsBody>
				</Tabs>
			</div>

			{/* Mobile */}
			<div className={twMerge("block lg:hidden w-full", className)}>
				<Tabs value={activeTab} className="flex flex-col gap-5">
					<TabsHeader className="w-full bg-primary/100">
						{membershipPackages.map(({ name, id }) => (
							<Tab
								key={id}
								value={id}
								onClick={() => setActiveTab(id)}
								className={
									activeTab === id
										? "text-primary transition-all delay-200"
										: "text-white"
								}
							>
								{name}
							</Tab>
						))}
					</TabsHeader>
					<TabsBody>
						{membershipPackages.map(
							({ id, name, coverImage, benefitOnMembershipPackages }) => (
								<TabPanel key={id} value={id} className="py-0">
									<ServiceItem
										image={`/images/${coverImage}`}
										title={name}
										benefits={benefitOnMembershipPackages}
									/>
								</TabPanel>
							)
						)}
					</TabsBody>
				</Tabs>
			</div>
		</>
	);
}

export default ServiceTabs;
