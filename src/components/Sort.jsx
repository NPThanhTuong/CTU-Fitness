"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Option, Select } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

function Sort({ sortBy, sortAttribute, sortValues, label, className }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleChangeOrderAttribute = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("orderAttribute", value);
      params.delete("page");
    } else {
      params.delete("orderAttribute");
    }
    router.push(`${pathName}?${params.toString()}`);
  };

  const handleChangeOrderBy = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("orderBy", value);
      params.delete("page");
    } else {
      params.delete("orderBy");
    }
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div
      className={twMerge("grid grid-cols-2 gap-2 md:grid-cols-3", className)}
    >
      <div className="md:col-span-2">
        <Select
          variant="outlined"
          label={label}
          defaultValue={sortAttribute}
          onChange={handleChangeOrderAttribute}
          color="deep-orange"
        >
          {sortValues.map((sortValue) => (
            <Option value={sortValue.value} key={sortValue.value}>
              {sortValue.title}
            </Option>
          ))}
        </Select>
      </div>

      <div>
        <Select
          variant="outlined"
          label="Thứ tự sắp xếp"
          defaultValue={sortBy}
          onChange={handleChangeOrderBy}
          className="w-full"
          color="deep-orange"
        >
          <Option value="asc">Thứ tự tăng dần</Option>
          <Option value="desc">Thứ tự giảm dần</Option>
        </Select>
      </div>
    </div>
  );
}

export default Sort;
