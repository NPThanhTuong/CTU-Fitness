"use client";

import { SearchIcon } from "@/icons";
import { Input } from "@material-tailwind/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useDebouncedCallback } from "use-debounce";

function Search({ label, searchTerm, className }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback((searchTerm) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("search", searchTerm);
      params.delete("page");
    } else {
      params.delete("search");
    }
    router.replace(`${pathName}?${params.toString()}`);
  }, 1000);

  return (
    <div className={twMerge("relative flex", className)}>
      <Input
        type="text"
        label={label}
        onChange={(e) => handleSearch(e.target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
        // defaultValue={searchParams.get("search")?.toString()}
        defaultValue={searchTerm}
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
