"use client";

import Link from "next/link";

import {
	Avatar,
	IconButton,
	Popover,
	PopoverContent,
	PopoverHandler,
} from "@material-tailwind/react";

import {
	MagnifyingGlassIcon,
	BellIcon,
	Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import AsideNav from "@/components/Admin/AsideNav";

function TopHeader({ textLink, href, className }) {
	const [open, setOpen] = useState(false);
	const openDrawer = () => setOpen(true);
	const [openPopover, setOpenPopover] = useState(false);

	const triggers = {
		onMouseEnter: () => setOpenPopover(true),
		onMouseLeave: () => setOpenPopover(false),
	};

	return (
		<div className={className}>
			<AsideNav open={open} closeDrawer={() => setOpen(false)} />
			<Link href={href} className="text-gray-800 font-bold text-3xl">
				{textLink}
			</Link>
			<div className="flex justify-around items-center p-2 rounded-full shadow-lg bg-white gap-2">
				<IconButton
					onClick={openDrawer}
					variant="text"
					className="rounded-full lg:hidden"
				>
					<Bars3BottomLeftIcon className="size-5 text-[#a6b3c4]" />
				</IconButton>
				<div className="flex items-center bg-[#f5f8fe] p-3 rounded-full gap-1">
					<MagnifyingGlassIcon className="w-5 h-5 text-[#a6b3c4]" />
					<input
						type="text"
						className="border-none outline-none bg-[#f5f8fe] text-[#a6b3c4] text-sm px-1"
						placeholder="Tìm kiếm..."
					/>
				</div>

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
	);
}

export default TopHeader;
