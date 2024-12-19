import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - eft",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
		title: "Daikoomyo - eft",
		description: "Camille Boucher Thérapeute holistique",
		url: "https://www.daikoomyo.fr",
		type: "website",
		images: [
			{
			url: "https://www.daikoomyo.fr/images/Untitled%20design.PNG",
			},
      	],
    },
    robots: {
		index: true,
		follow: true,
  	},
	alternates: {
		canonical: "https://www.daikoomyo.fr/eft",
	}
};

export default function EftLayout({
    children,
}: Readonly<{ children: React.ReactNode; }>
) {
    return (
		<div>
			{children}
		</div>
  	);
}