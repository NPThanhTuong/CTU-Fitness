"use client";

import { deleteImage } from "@/utils/formActions";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

function FormDeleteImages({ listImage, revalidatePath }) {
	const [listImageDisplay, setListImageDisplay] = useState(listImage);

	const handleListImage = async (pathName) => {
		setListImageDisplay((prevList) =>
			prevList.filter((item) => item.pathName !== pathName)
		);
		deleteImage(pathName);
	};

	return (
		<>
			<p className="text-gray-800 text font-bold mt-6 mb-4">
				Hình ảnh sản phẩm:
			</p>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
				{listImageDisplay.length > 0 ? (
					listImageDisplay.map(({ pathName }, index) => (
						<form action={deleteImage} key={index} className="relative">
							<Image
								className="w-full max-w-full rounded-lg object-cover object-center"
								src={`/images/${pathName}`}
								alt="equipment-photo"
								width={200}
								height={200}
							/>
							<input
								type="text"
								hidden
								defaultValue={pathName}
								name="pathName"
							/>
							<input
								type="text"
								hidden
								defaultValue={revalidatePath}
								name="revalidatePath"
							/>
							<button
								className="rounded-full absolute top-0 right-0 p-1 ring-1 ring-primary"
								type="submit"
								onClick={(e) => {
									handleListImage(pathName);
								}}
							>
								<XMarkIcon className="text-primary size-4" />
							</button>
						</form>
					))
				) : (
					<p className="text-gray-400 font-semibold my-2 text-center">
						Thiết bị không có hình ảnh.
					</p>
				)}
			</div>
		</>
	);
}

export default FormDeleteImages;
