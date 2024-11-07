import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - fleurs de bach",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("http://www.daikoomyo.fr"),
    openGraph: {
      title: "Daikoomyo - fleurs de bach",
      description: "Camille Boucher Thérapeute holistique",
      url: "http://www.daikoomyo.fr",
      type: "website",
      images: [
        {
          url: "http://www.daikoomyo.fr/images/bach1.jpg",
        },
      ],
    },
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
  }