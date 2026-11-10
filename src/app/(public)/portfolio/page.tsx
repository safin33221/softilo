import { Metadata } from "next";
import { getAllProjects } from "@/data/data";
import { PortfolioView } from "@/components/portfolio/portfolio-view";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://softilo.io";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore Softilo (softilo.io) showcase of digital masterworks across Custom Software, Educational & Travel ERP, UI/UX Design, and High-Impact Digital Marketing.",
  keywords: [
    "Softilo Portfolio",
    "softilo.io Case Studies",
    "Software Case Studies Bangladesh",
    "Educational ERP Case Study",
    "Travel Agency Software Portfolio",
    "Web Development Projects",
    "UI/UX Design Showcase",
  ],
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Portfolio & Case Studies | Softilo (softilo.io)",
    description:
      "Explore Softilo's showcase of digital masterworks across Custom Software, ERP Systems, UI/UX Design, and High-Impact Digital Marketing.",
    url: `${SITE_URL}/portfolio`,
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Softilo (softilo.io) Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Softilo (softilo.io)",
    description:
      "Explore Softilo's showcase of digital masterworks across Custom Software, ERP Systems, UI/UX Design, and High-Impact Digital Marketing.",
    images: ["/logo.jpg"],
  },
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/portfolio#collection`,
    name: "Softilo Portfolio & Case Studies",
    url: `${SITE_URL}/portfolio`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.shortDesc,
          image: project.image,
          creator: {
            "@type": "Organization",
            name: "Softilo",
            url: SITE_URL,
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <PortfolioView projects={projects} />
    </>
  );
}
