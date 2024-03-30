"use client";

import { SearchIcon } from "@/icons";
import { Input } from "@material-tailwind/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function Search({ label, className }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathName = usePathname();

	const handleSearch = useDebouncedCallback((searchTerm) => {
		const params = new URLSearchParams(searchParams);
		if (searchTerm) {
			params.set("query", searchTerm);
			params.delete("page");
		} else {
			params.delete("query");
		}
		router.replace(`${pathName}?${params.toString()}`);
	}, 1000);

	return (
		<div className={className}>
			<Input
				type="text"
				label={label}
				onChange={(e) => handleSearch(e.target.value)}
				className="pr-20"
				containerProps={{
					className: "min-w-0",
				}}
				defaultValue={searchParams.get("query")?.toString()}
				maxLength={50}
				color="deep-orange"
			/>

			<SearchIcon
				className="absolute top-1 right-1 text-primary/80"
				width="1.8rem"
				height="1.8rem"
			/>
		</div>
	);
}

export default Search;
