import TopHeader from "@/components/Admin/TopHeader";

function EquipmentLayout({ children }) {
	return (
		<div>
			<TopHeader
				href="/admin/equipments"
				textLink="Thiết bị"
				className="h-36 grid grid-cols-1 gap-4 lg:h-24 lg:flex lg:justify-between lg:items-center p-3"
			/>
			{children}
		</div>
	);
}

export default EquipmentLayout;
