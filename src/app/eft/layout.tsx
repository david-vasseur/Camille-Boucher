import { fetchCommentsBySoin } from "@/utils/fetchComments";
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
	},
};

const reviews = await fetchCommentsBySoin(1);

export default function EftLayout({
  	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			{children}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness", 
					"name": "Daikoomyo - E.F.T à Nîmes",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "15 rue Tedenat",
						"addressLocality": "Nîmes",
						"postalCode": "30000",
						"addressCountry": "FR"
					},
					"url": "https://www.daikoomyo.fr/eft",
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": 43.8360121,
						"longitude": 4.3564366
					},
					"sameAs": [
						"https://www.facebook.com/camille.daikoomyo.therapeute",
						"https://www.instagram.com/camille_daikoomyo_therapeute"
					],
					"image": "https://www.daikoomyo.fr/images/Untitled%20design.PNG", 
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
						"name": "Daikoomyo - E.F.T",
					},
					},
					"review": reviews.map(
					(review: {
						author: string;
						soin: number;
						message: string;
						note: number;
						createdAt: string;
					}) => ({
						"@type": "Review",
						"author": {
						"@type": "Person",
						"name": review.author,
						},
						"datePublished": review.createdAt,
						"reviewBody": review.message,
						"reviewRating": {
						"@type": "Rating",
						"ratingValue": review.note.toString(),
						"bestRating": "5",
						},
					})
					),
				}),
				}}
			/>
		</div>
	);
}
