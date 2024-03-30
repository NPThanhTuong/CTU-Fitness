"use client";

import React, { useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function DefaultPagination({ totalPage }) {
	// const [active, setActive] = React.useState(1);
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const numPages = totalPage;
	const params = new URLSearchParams(searchParams);
	const currPage = parseInt(searchParams.get("page")) || 1;

	const getItemProps = (index) => ({
		variant: currPage === index ? "filled" : "text",
		color: currPage === index ? "deep-orange" : "gray",
		onClick: () => setPaginationURL(index),
	});

	const setPaginationURL = (index) => {
		params.set("page", index);
		router.push(`${pathName}?${params.toString()}`);
	};

	const next = () => {
		if (currPage === numPages) return;
		setPaginationURL(currPage + 1);
	};

	const prev = () => {
		if (currPage === 1) return;
		setPaginationURL(currPage - 1);
	};

	return (
		<div className="flex items-center gap-4">
			<Button
				variant="text"
				className="flex items-center gap-2"
				onClick={prev}
				disabled={currPage === 1 || numPages === 0}
			>
				<ArrowLeftIcon /> Trang trước
			</Button>
			<div className="flex items-center gap-2">
				{[...Array(totalPage)].map((el, index) => (
					<IconButton key={index} {...getItemProps(index + 1)}>
						{index + 1}
					</IconButton>
				))}
			</div>
			<Button
				variant="text"
				className="flex items-center gap-2"
				onClick={next}
				disabled={currPage === numPages || numPages === 0}
			>
				Trang sau
				<ArrowRightIcon />
			</Button>
		</div>
	);
}

export default DefaultPagination;
