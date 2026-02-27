import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Ashraf Uddin",
	description: "Portfolio Of Ashraf Uddin",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} max-w-6xl mx-auto min-h-screen bg-neutral-950 text-white`}
			>
				<Header />
				<main className='min-h-[70vh] px-6 md:px-12 lg:px-24 pt-24 pb-8'>
					{children}
				</main>
			</body>
		</html>
	);
}
