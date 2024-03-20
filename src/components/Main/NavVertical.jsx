"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";

function NavVertical({ navList, onClick }) {
	const pathName = usePathname();

	return (
		<>
			{/* Header */}
			<div className="px-4 pt-6 pb-2 flex justify-between items-center">
				<Link
					href="/admin"
					className="text-2xl font-bold uppercase text-center block"
				>
					CTU <span className="text-primary">Fitness</span>
				</Link>
				<div className="p-1 rounded-md hover:cursor-pointer hover:bg-gray-100">
					<XMarkIcon
						className="size-8 text-gray-800 lg:hidden"
						onClick={onClick}
					/>
				</div>
			</div>
			<hr className="text-gray-600 my-4" />
			{/* Body */}
			<nav className="px-2 flex flex-col gap-2 mt-8">
				{navList.map((navItem) => (
					<Link
						href={navItem.href}
						key={navItem.href}
						className={twMerge(
							"block p-3 w-full rounded-md text-gray-800 hover:bg-gray-200 transition-all",
							pathName === navItem.href
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						{navItem.textLink}
					</Link>
				))}
			</nav>
		</>
	);
}

export default NavVertical;
