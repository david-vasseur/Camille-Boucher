import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const parisienne = localFont({
	src: [
		{
		path: "./fonts/parisienne-regular-webfont.woff2", 
		weight: "400", 
		style: "normal", 
		},
		{
		path: "./fonts/parisienne-regular-webfont.woff", 
		weight: "400", 
		style: "normal", 
		},
	],
	variable: "--font-parisienne", 
});

const oldStandard = localFont({
	src: [
		{
		path: "./fonts/oldstandardtt-bold-webfont.woff2",
		weight: "400",
		style: "bold",
		},
		{
		path: "./fonts/oldstandardtt-bold-webfont.woff",
		weight: "400",
		style: "bold",
		},
		{
		path: "./fonts/oldstandardtt-regular-webfont.woff2",
		weight: "400",
		style: "normal",
		},
		{
		path: "./fonts/oldstandardtt-regular-webfont.woff",
		weight: "400",
		style: "normal",
		},
		{
		path: "./fonts/oldstandardtt-italic-webfont.woff2",
		weight: "400",
		style: "italic",
		},
		{
		path: "./fonts/oldstandardtt-italic-webfont.woff",
		weight: "400",
		style: "italic",
		}
	],
  	variable: "--font-oldStandard",
});

export const metadata: Metadata = {
	title: "Daikoomyo - Camille Boucher thérapeute",
	description: "Camille Boucher thérapeute",
	metadataBase: new URL("http://www.daikoomyo.fr"),
	openGraph: {
		title: "Daikoomyo - Camille Boucher thérapeute",
		description: "Camille Boucher Thérapeute holistique",
		url: "http://www.daikoomyo.fr",
		type: "website",
		images: [
			{
				url: "http://www.daikoomyo.fr/images/fond2.PNG",
			},
		],
	},
};

export default function RootLayout(
	{
  		children,
	}: Readonly<{
  		children: React.ReactNode;
	}>) {
  	return (
		<html lang="fr">
			<body
				className={`${parisienne.variable} ${oldStandard.variable} antialiased bg-secondary_color md-background`}
			>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
  );
}
