import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - fleurs de bach",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
		title: "Daikoomyo - fleurs de bach",
		description: "Camille Boucher Thérapeute holistique",
		url: "https://www.daikoomyo.fr",
		type: "website",
		images: [
			{
			url: "https://www.daikoomyo.fr/images/bach1.jpg",
			},
		],
    },
    robots: {
		index: true,
		follow: true,
  	},
	alternates: {
		canonical: "https://www.daikoomyo.fr/fleurs-de-bach",
	}
  };

export default function BachLayout({
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