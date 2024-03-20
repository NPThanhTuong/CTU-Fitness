import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/midleExport";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Health Fitness",
	description: "Health fitness improve our health for a better life",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<ThemeProvider>
				<body className={inter.className}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
