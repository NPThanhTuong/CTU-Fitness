import { ThemeProvider } from "@/components/midleExport";
import { navList } from "@/utils/constants";

import NavVertical from "@/components/Main/NavVertical";

function AdminLayout({ children }) {
	return (
		<ThemeProvider>
			<div className="grid grid-cols-12 min-h-screen bg-[#f5f8fe] gap-6">
				<div className="hidden lg:block lg:col-span-2 bg-white shadow-md">
					<NavVertical navList={navList} />
				</div>

				<div className="col-span-12 lg:col-span-10 sticky bg-[#f5f8fe]/20">
					{children}
				</div>
			</div>
		</ThemeProvider>
	);
}

export default AdminLayout;
