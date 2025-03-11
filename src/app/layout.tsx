import type { Metadata } from "next";
import "./globals.css";
import Header from "@/domains/external/components/header";

import { Bricolage_Grotesque, Inter } from "next/font/google";

const bricolage = Bricolage_Grotesque({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bricolage",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Obana - Enabling SMEs Scale",
	description:
		"We help SMEs in Nigeria and Sub-Saharan Africa scale by providing a seamless, tech-driven supply chain and delivering cost-effective solutions.",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${bricolage.variable} ${inter.variable}`}>
				<Header />
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
