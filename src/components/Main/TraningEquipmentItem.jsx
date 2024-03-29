import Image from "next/image";
import Link from "next/link";

function TraningEquipmentItem({ id, title, image, muscles }) {
	return (
		<div className="relative w-full max-w-[700px]">
			<h3 className="text-xl font-bold uppercase text-center mb-2">{title}</h3>

			<Image
				src={`/images/${image}`}
				width={1000}
				height={1000}
				alt="Training equiment image"
				className="h-5/6 object-cover rounded-md"
			/>

			<div className="absolute -bottom-12 w-full z-1 flex justify-around">
				{muscles.map(({ muscle }, index) => (
					<div key={index} className="flex flex-col items-center ">
						<div className="flex justify-center items-center ring-primary ring-2 rounded-full p-2 bg-white">
							<Image
								src={`/images/icons/${muscle.image}`}
								width={56}
								height={56}
								alt="Icon image"
								className="object-contain"
							/>
						</div>
						<h4 className="text-primary text-sm font-semibold mt-2 text-center">
							{muscle.name}
						</h4>
					</div>
				))}
			</div>
			<div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
				<Link
					href={`/equipments/detail/${id}`}
					className="font-bold text-gray-800 hover:text-primary hover:underline"
				>
					Chi tiết <span className="text-primary">&#10140;</span>
				</Link>
			</div>
		</div>
	);
}

export default TraningEquipmentItem;
