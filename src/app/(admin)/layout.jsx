"use client";

import DrawerItem from "@/components/Main/DrawerMobile";
import NavVertical from "@/components/Main/NavVertical";
import { useState } from "react";
import {
	Avatar,
	Breadcrumbs,
	Button,
	Drawer,
	IconButton,
	Popover,
	PopoverContent,
	PopoverHandler,
	Typography,
} from "@material-tailwind/react";
import {
	MagnifyingGlassIcon,
	BellIcon,
	Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminLayout({ children }) {
	const [open, setOpen] = useState(false);
	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);
	const [openPopover, setOpenPopover] = useState(false);
	const currentPath = usePathname();

	const triggers = {
		onMouseEnter: () => setOpenPopover(true),
		onMouseLeave: () => setOpenPopover(false),
	};

	const navList = [
		{
			href: "/admin",
			textLink: "Trang chủ",
		},
		{
			href: "/admin/users",
			textLink: "Người dùng",
		},
		{
			href: "/admin/users/create",
			textLink: "Thêm người dùng",
		},
		{
			href: "/admin/users/edit",
			textLink: "Chỉnh sửa người dùng",
		},
		{
			href: "/admin/equipments",
			textLink: "Thiết bị",
		},
		{
			href: "/admin/exercises",
			textLink: "Bài tập",
		},
		{
			href: "/admin/training-sessions",
			textLink: "Buổi tập",
		},
		{
			href: "/admin/benefits",
			textLink: "Quyền lợi",
		},
		{
			href: "/admin/membership-packages",
			textLink: "Gói thành viên",
		},
	];

	const currentPage = navList.find((element) => {
		return element.href === currentPath;
	});

	return (
		<div className="grid grid-cols-12 min-h-screen bg-[#f5f8fe] gap-6">
			<div className="hidden lg:block lg:col-span-2 bg-white shadow-md">
				<NavVertical navList={navList} />
			</div>

			<div className="col-span-12 lg:col-span-10 sticky bg-[#f5f8fe]/20">
				<Drawer open={open} onClose={closeDrawer}>
					<NavVertical navList={navList} onClick={closeDrawer} />
				</Drawer>
				<div className="h-36 grid grid-cols-1 gap-4 lg:h-24 lg:flex lg:justify-between lg:items-center p-3">
					<Link
						href={currentPage.href}
						className="text-gray-800 font-bold text-4xl"
					>
						{currentPage.textLink}
					</Link>
					<div className="flex justify-around items-center p-2 rounded-full shadow-lg bg-white gap-2">
						<div className="flex items-center bg-[#f5f8fe] p-3 rounded-full gap-1">
							<MagnifyingGlassIcon className="w-5 h-5 text-[#a6b3c4]" />
							<input
								type="text"
								className="border-none outline-none bg-[#f5f8fe] text-[#a6b3c4] text-sm px-1"
								placeholder="Tìm kiếm..."
							/>
						</div>

						<IconButton
							onClick={openDrawer}
							variant="text"
							className="rounded-full lg:hidden"
						>
							<Bars3BottomLeftIcon className="size-5 text-[#a6b3c4]" />
						</IconButton>

						<Link href="#">
							<IconButton variant="text" className="rounded-full">
								<BellIcon className="size-5 text-[#a6b3c4]" />
							</IconButton>
						</Link>

						<Popover
							open={openPopover}
							handler={setOpenPopover}
							placement="bottom-start"
						>
							<PopoverHandler {...triggers}>
								<Avatar src="/images/third-trainer.jpg" size="sm" />
							</PopoverHandler>
							<PopoverContent
								{...triggers}
								className="z-50 max-w-96 w-48 p-0 py-3 flex flex-col text-base text-gray-800"
							>
								<Link
									className="block py-2 px-3 hover:bg-primary/10 outline-none"
									href="/admin/profile"
								>
									Hồ sơ
								</Link>
								<hr />
								<Link
									className="block py-2 px-3 hover:bg-primary/10 outline-none"
									href="/admin/logout"
								>
									Đăng xuất
								</Link>
							</PopoverContent>
						</Popover>
					</div>
				</div>

				{children}
			</div>
		</div>
	);
}

export default AdminLayout;
