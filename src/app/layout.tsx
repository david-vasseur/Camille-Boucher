import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daikoomyo",
  description: "Camille Boucher thérapeute",
  metadataBase: new URL("http://91.134.90.159/camille/"),
  openGraph: {
    title: "Daikoomyo",
    description: "Camille Boucher Thérapeute holistique",
    url: "http://91.134.90.159/camille/",
    type: "website",
    images: [
      {
        url: "/camille/images/fond2.PNG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary_color`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
