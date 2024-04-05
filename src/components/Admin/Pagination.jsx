import { Button, Typography } from "@/components/midleExport";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({ className, totalPage }) {
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const numPages = totalPage;
	const params = new URLSearchParams(searchParams);
	const currPage = parseInt(searchParams.get("page")) || 1;

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
		<div className={className}>
			<Typography variant="small" color="blue-gray" className="font-normal">
				Trang {currPage} trên {numPages}
			</Typography>
			<div className="flex gap-2">
				<Button
					variant="outlined"
					size="sm"
					onClick={prev}
					disabled={currPage === 1 || numPages === 1}
				>
					Trước
				</Button>
				<Button
					variant="outlined"
					size="sm"
					onClick={next}
					disabled={currPage === numPages || numPages === 1}
				>
					Sau
				</Button>
			</div>
		</div>
	);
}

export default Pagination;
