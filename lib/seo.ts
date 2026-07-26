import type { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/assets/hero-yacht.jpg",
}: GenerateMetadataProps): Metadata {
  const siteName = "VELANTIS YACHTS";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://velantisyachts.com${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL("https://velantisyachts.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@VelantisYachts",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
