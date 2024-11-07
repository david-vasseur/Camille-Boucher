import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - massage holistique",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("http://www.daikoomyo.fr"),
    openGraph: {
      title: "Daikoomyo - massage holistique",
      description: "Camille Boucher Thérapeute holistique",
      url: "http://www.daikoomyo.fr",
      type: "website",
      images: [
        {
          url: "http://www.daikoomyo.fr/images/massage1.jpg",
        },
      ],
    },
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
  }