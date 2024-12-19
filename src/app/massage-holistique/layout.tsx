import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - massage holistique",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
		title: "Daikoomyo - massage holistique",
		description: "Camille Boucher Thérapeute holistique",
		url: "https://www.daikoomyo.fr",
		type: "website",
		images: [
			{
			url: "https://www.daikoomyo.fr/images/massage1.jpg",
			},
		],
    },
    robots: {
		index: true,
		follow: true,
  	},
	alternates: {
		canonical: "https://www.daikoomyo.fr/massage-holistique",
	}
};

export default function MassageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
          	{children}
        </div> 
    );
};