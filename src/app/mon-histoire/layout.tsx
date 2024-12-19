import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - mon histoire",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
		title: "Daikoomyo - mon histoire",
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
		canonical: "https://www.daikoomyo.fr/mon-histoire",
	}
};

export default function HistoireLayout({
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