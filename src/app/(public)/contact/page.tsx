import { Metadata } from "next";
import { getAllServices } from "@/data/data";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Book a Free Consultation & Contact",
  description:
    "Initiate your project brief with Softilo Agency. Connect directly with senior software architects for Custom Software, Educational & Travel ERP, and Digital Growth.",
  keywords: [
    "Contact Softilo Agency",
    "Book Software Consultation",
    "Hire Software Company Bangladesh",
    "Educational ERP Demo Request",
    "Travel ERP Demo Request",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Free Consultation & Contact | Softilo Agency",
    description:
      "Initiate your project brief with Softilo. Connect directly with senior architects for custom software, ERP systems, and high-impact branding.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Contact Softilo Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation & Contact | Softilo Agency",
    description:
      "Initiate your project brief with Softilo. Connect directly with senior architects for custom software, ERP systems, and high-impact branding.",
    images: ["/logo.jpg"],
  },
};

export default function ContactPage() {
  const services = getAllServices();

  return <ContactView services={services} />;
}
