"use client";

import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function DrawerItem() {
	const [open, setOpen] = useState(false);
	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);
	const pathName = usePathname();

	return (
		<div className="min-h-screen shadow-xl">
			{/* Mobile */}
			<div className="block lg:hidden">
				<Drawer open={open} onClose={closeDrawer}>
					{/* Drawer header */}
					<div className="mb-2 flex items-center justify-between px-4 pt-6 pb-2">
						<h2 className="text-2xl font-bold uppercase text-center">
							CTU <span className="text-primary">Fitness</span>
						</h2>
						<IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</IconButton>
					</div>
					<hr className="text-gray-600 my-4" />
					{/* Drawer body */}
					<List>
						<ListItem
							className={twMerge(
								pathName === "/admin"
									? "active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white"
									: ""
							)}
						>
							<Link href="/admin">Trang chủ</Link>
						</ListItem>
						<ListItem className="active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white">
							<Link href="/admin/users">Người dùng</Link>
						</ListItem>
						<ListItem className="active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white">
							<Link href="/admin/equipments">Thiết bị</Link>
						</ListItem>
						<ListItem className="active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white">
							<Link href="/exercises">Bài tập</Link>
						</ListItem>
						<ListItem className="active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white">
							<Link href="/training-sessions">Buổi tập</Link>
						</ListItem>
						<ListItem className="active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white">
							<Link href="/benefits">Quyền lợi</Link>
						</ListItem>
						<ListItem className="active:bg-primary/90 active:text-white focus:bg-primary/90 focus:text-white">
							<Link href="/membership-packages">Gói thành viên</Link>
						</ListItem>
					</List>
					{/* Drawer footer (optional) */}
				</Drawer>
			</div>

			{/* Desktop */}
			<div className="hidden lg:block">
				{/* Drawer header */}
				<div className="px-4 pt-6 pb-2">
					<h2 className="text-2xl font-bold uppercase text-center">
						CTU <span className="text-primary">Fitness</span>
					</h2>
				</div>
				<hr className="text-gray-600 my-4" />
				{/* Drawer body */}
				<nav className="px-2 flex flex-col gap-2 mt-8">
					<Link
						href="/admin"
						className={twMerge(
							"block p-3 w-full rounded-md text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Trang chủ
					</Link>
					<Link
						href="/admin/users"
						className={twMerge(
							"block p-3 w-full rounded-md  text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin/users"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Người dùng
					</Link>
					<Link
						href="/admin/equipments"
						className={twMerge(
							"block p-3 w-full rounded-md  text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin/equipments"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Thiết bị
					</Link>
					<Link
						href="/admin/exercises"
						className={twMerge(
							"block p-3 w-full rounded-md  text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin/exercises"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Bài tập
					</Link>
					<Link
						href="/admin/training-sessions"
						className={twMerge(
							"block p-3 w-full rounded-md  text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin/training-sessions"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Buổi tập
					</Link>
					<Link
						href="/admin/benefits"
						className={twMerge(
							"block p-3 w-full rounded-md  text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin/benefits"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Quyền lợi
					</Link>
					<Link
						href="/admin/membership-packages"
						className={twMerge(
							"block p-3 w-full rounded-md  text-gray-800 hover:bg-gray-200 transition-all",
							pathName === "/admin/membership-packages"
								? "text-white bg-primary hover:bg-primary/90"
								: ""
						)}
					>
						Gói thành viên
					</Link>
				</nav>
			</div>
		</div>
	);
}

export default DrawerItem;
