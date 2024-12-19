import { fetchCommentsBySoin } from "@/utils/fetchComments";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daikoomyo - reiki à Nîmes",
    description: "Camille Boucher thérapeute",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
		title: "Daikoomyo - reiki à Nîmes",
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

const reviews = await fetchCommentsBySoin(2);

export default function ReikiLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
          	{children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness", 
                        "name": "Daikoomyo - Reiki à Nîmes",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "15 rue Tedenat",
                            "addressLocality": "Nîmes",
                            "postalCode": "30000",
                            "addressCountry": "FR"
                        },
                        "telephone": "+33 6 18 65 95 10",
                        "priceRange": "$$",
                        "url": "https://www.daikoomyo.fr/soin-energetique",
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 43.8360121,
                            "longitude": 4.3564366
                        },
                        "sameAs": [
                            "https://www.facebook.com/camille.daikoomyo.therapeute",
                            "https://www.instagram.com/camille_daikoomyo_therapeute"
                        ],
                        "image": "https://www.daikoomyo.fr/images/reiki1.PNG", 
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": reviews.length
                                ? (
                                    reviews.reduce(
                                    (acc: number, review: {
                                        author: string;
                                        soin: number;
                                        message: string;
                                        note: number;
                                        createdAt: string;
                                    }) => acc + review.note,
                                    0
                                    ) / reviews.length
                                ).toFixed(1)
                                : "0",
                            "reviewCount": reviews.length,
                            "bestRating": "5",
                            "worstRating": "1",
                            "itemReviewed": {
                                "@type": "Service", 
                                "name": "Daikoomyo - Reiki à Nîmes",
                            },
                        },
                    }),
                    }}
                />
        </div> 
    );
};