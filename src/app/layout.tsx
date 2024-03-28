import type { Metadata } from "next";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";

const Baloo = Baloo_Bhaijaan_2({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Taaly",
	description:
		"Taaly is a 1-on-1 training platform that connects new Dutch learners with natives. You practice the Dutch language using video chat with a native speaker to eventually be able to communicate with everyone and find your place in society.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={Baloo.className}>{children}</body>
		</html>
	);
}
