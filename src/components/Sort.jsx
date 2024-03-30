"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Option, Select } from "@material-tailwind/react";

function Sort({ sortValues, label, className, sortType }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathName = usePathname();

	const handleSorting = (value) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set(sortType, value);
		} else {
			params.delete(sortType);
		}
		router.replace(`${pathName}?${params.toString()}`);
	};
	return (
		<Select
			variant="outlined"
			label={label}
			defaultValue={searchParams.get(sortType)?.toString()}
			onChange={handleSorting}
			className={className}
		>
			{sortValues.map((sortValue) => (
				<Option value={sortValue.value} key={sortValue.value}>
					{sortValue.title}
				</Option>
			))}
		</Select>
	);
}

export default Sort;
