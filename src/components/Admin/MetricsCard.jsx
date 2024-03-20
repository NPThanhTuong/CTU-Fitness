import { ChartBarIcon } from "@heroicons/react/24/solid";

function MetricsCard({ icon, title, metrics }) {
	return (
		<div className="p-5 bg-white flex gap-4 rounded-xl shadow-md items-center">
			<div className="size-12 bg-gray-100 flex justify-center items-center rounded-full">
				{icon}
			</div>
			<div>
				<h6 className="text-base text-gray-400 font-semibold mb-1">{title}</h6>
				<p className="text-gray-800 text-lg font-semibold">{metrics}</p>
			</div>
		</div>
	);
}

export default MetricsCard;
