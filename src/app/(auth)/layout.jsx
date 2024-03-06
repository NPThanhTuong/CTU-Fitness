import { ThemeProvider } from "@/components/midleExport";
import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sign up",
	description: "Đăng ký tham gia tập luyện ngay",
};

function AuthLayout({ children }) {
	return (
		<html lang="en">
			<ThemeProvider>
				<body className={inter.className}>{children}</body>
			</ThemeProvider>
		</html>
	);
}

export default AuthLayout;
