"use client";

import NavVertical from "@/components/Main/NavVertical";
import { navList } from "@/utils/constants";
import { Drawer } from "@material-tailwind/react";

function AsideNav({ open, closeDrawer }) {
	return (
		<Drawer open={open} onClose={closeDrawer}>
			<NavVertical navList={navList} onClick={closeDrawer} />
		</Drawer>
	);
}

export default AsideNav;
