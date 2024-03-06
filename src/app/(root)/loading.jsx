"use client";

import { LoadingIcon } from "@/icons";

function LoadingPage() {
	return (
		<div className="flex justify-center items-center bg-orange-800 h-screen w-full">
			<LoadingIcon
				className="text-white animate-spin"
				width="4rem"
				height="4rem"
			/>
		</div>
	);
}

export default LoadingPage;
