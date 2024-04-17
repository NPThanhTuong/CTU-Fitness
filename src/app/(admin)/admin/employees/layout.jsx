import TopHeader from "@/components/Admin/TopHeader";

function EmployeeLayout({ children }) {
	return (
		<div>
			<TopHeader
				href="/admin/employees"
				textLink="Nhân viên"
				className="h-36 grid grid-cols-1 gap-4 lg:h-24 lg:flex lg:justify-between lg:items-center p-3"
			/>
			{children}
		</div>
	);
}

export default EmployeeLayout;
