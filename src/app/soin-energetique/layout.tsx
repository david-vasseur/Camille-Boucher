import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - reiki",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
		title: "Daikoomyo - reiki",
		description: "Camille Boucher Thérapeute holistique",
		url: "https://www.daikoomyo.fr",
		type: "website",
		images: [
			{
			url: "https://www.daikoomyo.fr/images/reiki1.PNG",
			},
		],
    },
    robots: {
		index: true,
		follow: true,
	},
    alternates: {
      	canonical: "https://www.daikoomyo.fr/soin-energetique",
    }
};

export default function ReikiLayout({
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