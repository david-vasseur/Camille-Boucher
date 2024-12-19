import type { Metadata } from "next";
import { fetchComments } from "../../utils/fetchComments"; 

export const metadata: Metadata = {
    title: "Daikoomyo - Vos avis",
    description: "Découvrez les avis de nos clients sur les soins énergétiques Reiki proposés par Camille Boucher.",
    metadataBase: new URL("https://www.daikoomyo.fr"),
    openGraph: {
        title: "Daikoomyo - Vos avis",
        description: "Retrouvez les témoignages de nos clients.",
        url: "https://www.daikoomyo.fr/vos-avis",
        type: "website",
        images: [
            {
                url: "https://www.daikoomyo.fr/images/avis.png",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://www.daikoomyo.fr/vos-avis",
    },
};
const reviews = await fetchComments()
export default function AvisLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    
    return (
        <div>
            {children}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Daikoomyo - Vos avis",
                        url: "https://www.daikoomyo.fr/vos-avis",
                        mainEntity: {
                            "@type": "AggregateRating",
                            ratingValue: reviews.length ? (reviews.reduce((acc: number, review: {author: string, soin: number, message: string, note: number, createdAt: string}) => acc + review.note, 0) / reviews.length).toFixed(1) : "0",
                            reviewCount: reviews.length,
                            bestRating: "5",
                            worstRating: "1",
                        },
                        review: reviews.map((review: {author: string, soin: number, message: string, note: number, createdAt: string}) => ({
                            "@type": "Review",
                            author: {
                                "@type": "Person",
                                name: review.author,
                            },
                            datePublished: review.createdAt,
                            reviewBody: review.message,
                            reviewRating: {
                                "@type": "Rating",
                                ratingValue: review.note.toString(),
                                bestRating: "5",
                            },
                        })),
                    }),
                }}
            />
        </div>
    );
}



