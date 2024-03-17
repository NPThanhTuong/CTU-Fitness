import Link from "next/link";
import { webPaths } from "@/utils/constants";
import { List, ListItem } from "@/components/midleExport";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

function NavList({ className }) {
	const currentPath = usePathname();

	return (
		<List className={className}>
			{webPaths.map((path, index) => (
				<div key={index}>
					{/* Mobile */}
					<ListItem
						key={`${index}_`}
						className={twMerge(
							"text-gray-800 justify-center items-center divide-y-2 rounded-md hover:text-white hover:bg-primary hover:bg-opacity-100 flex lg:hidden p-0",
							path.isButton && "orange_gradient text-white",
							currentPath === path.path && !path.isButton && "text-primary"
						)}
					>
						<Link href={path.path} className="block w-full text-center p-4">
							{path.name.toUpperCase()}
						</Link>
					</ListItem>

					{/* Desktop */}
					<Link
						key={`${index}__`}
						className={twMerge(
							"hidden lg:block lg:text-center lg:text-xs lg:font-semibold lg:p-3 lg:hover:text-primary lg:hover:cursor-pointer lg:transition-all",
							path.isButton
								? "lg:bg-primary lg:text-white lg:px-5 lg:py-3 lg:rounded-md lg:hover:scale-105 lg:hover:text-white"
								: "",
							currentPath === path.path && !path.isButton && "text-primary"
						)}
						href={path.path}
					>
						{path.name.toUpperCase()}
					</Link>
				</div>
			))}
		</List>
	);
}

export default NavList;
