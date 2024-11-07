import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - eft",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("http://www.daikoomyo.fr"),
    openGraph: {
      title: "Daikoomyo - eft",
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

  export default function EftLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
          {children}
        </div> 
    );
  }