import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - reiki",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("http://www.daikoomyo.fr"),
    openGraph: {
      title: "Daikoomyo - reiki",
      description: "Camille Boucher Thérapeute holistique",
      url: "http://www.daikoomyo.fr",
      type: "website",
      images: [
        {
          url: "http://www.daikoomyo.fr/images/reiki1.PNG",
        },
      ],
    },
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
  }