import { Metadata } from "next";
import { getAllServices } from "@/data/data";
import { ContactView } from "@/components/contact/contact-view";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://softilo.io";

export const metadata: Metadata = {
  title: "Book a Free Consultation & Contact",
  description:
    "Initiate your project brief with Softilo. Connect directly with senior software architects for Custom Software, Educational & Travel ERP, and Digital Growth.",
  keywords: [
    "Contact Softilo",
    "Book Software Consultation",
    "Hire Software Company Bangladesh",
    "Educational ERP Demo Request",
    "Travel ERP Demo Request",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Free Consultation & Contact | Softilo",
    description:
      "Initiate your project brief with Softilo. Connect directly with senior architects for custom software, ERP systems, and high-impact branding.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Contact Softilo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation & Contact | Softilo",
    description:
      "Initiate your project brief with Softilo. Connect directly with senior architects for custom software, ERP systems, and high-impact branding.",
    images: ["/logo.jpg"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Softilo",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Softilo",
    url: SITE_URL,
    email: "hello.softilo@gmail.com",
    sameAs: [
      "https://www.facebook.com/softilo0",
      "https://www.linkedin.com/company/softilo",
    ],
  },
};

export default function ContactPage() {
  const services = getAllServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactView services={services} />
    </>
  );
}
