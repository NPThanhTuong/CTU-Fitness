import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/midleExport";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Health Fitness",
	description: "Health fitness improve our health for a better life",
};

export default function GroupRootLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
