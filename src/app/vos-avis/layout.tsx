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
        </div>
    );
}



