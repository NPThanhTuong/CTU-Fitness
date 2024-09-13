import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/midleExport";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { sessionToken } from "@/utils/constants";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Health Fitness",
	description: "Health fitness improve our health for a better life",
};

export default function GroupRootLayout({ children }) {
	const token  = cookies().get(sessionToken);
	return (
		<>
			<Header authToken={token} />
			{children}
			<Footer />
		</>
	);
}
