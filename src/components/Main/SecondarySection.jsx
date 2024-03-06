import { twMerge } from "tailwind-merge";

function SecondarySection({ children, bgImage }) {
	return (
		<section
			className={twMerge(
				"w-full bg-no-repeat bg-center bg-cover py-20 px-3",
				bgImage
			)}
		>
			<div className="container mx-auto flex flex-col justify-center items-center">
				{children}
			</div>
		</section>
	);
}

export default SecondarySection;
