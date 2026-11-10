import { Metadata } from "next";
import { getAllProjects } from "@/data/data";
import { PortfolioView } from "@/components/portfolio/portfolio-view";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore Softilo's showcase of digital masterworks across Custom Software, Educational & Travel ERP, UI/UX Design, and High-Impact Digital Marketing.",
  keywords: [
    "Softilo Portfolio",
    "Software Case Studies Bangladesh",
    "Educational ERP Case Study",
    "Travel Agency Software Portfolio",
    "Web Development Projects",
    "UI/UX Design Showcase",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Softilo",
    description:
      "Explore our showcase of digital masterworks across Custom Software, ERP Systems, UI/UX Design, and High-Impact Digital Marketing.",
    url: "/portfolio",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Softilo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Softilo",
    description:
      "Explore our showcase of digital masterworks across Custom Software, ERP Systems, UI/UX Design, and High-Impact Digital Marketing.",
    images: ["/logo.jpg"],
  },
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return <PortfolioView projects={projects} />;
}
