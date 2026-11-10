import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

const SITE_URL = "https://softilo.io";

export const metadata: Metadata = {
  title:
    "Softilo (softilo.io) | Custom Software, ERP, Branding & Digital Growth Agency",
  description:
    "Official website of Softilo (softilo.io). Full-stack software engineering, Educational LMS/ERP, Travel Agency ERP, UI/UX design, branding, and digital growth solutions with 2 Years Free Maintenance and Full Software Ownership.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Softilo (softilo.io) | Building Brands That Dominate Digitally",
    description:
      "Official Softilo platform (softilo.io) — Custom Software, Educational & Travel ERP, Branding, and Digital Growth solutions.",
    url: SITE_URL,
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Softilo (softilo.io) Official Logo",
      },
    ],
  },
};

const homePageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Softilo (softilo.io)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Softilo (officially online at https://softilo.io) is a software engineering, ERP development, and digital growth agency founded by Safayet Hossan Safin and led with COO Jahedul Alam, CCO Belal Hossain, and a dedicated in-house engineering and creative team.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Softilo provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Softilo provides Custom Software Development, Educational ERP & LMS Platforms, Travel Agency Booking & Visa Tracking ERP, AI Automation, Website & E-Commerce Development, UI/UX Design, Digital Marketing, Video Editing, and Motion Graphics.",
      },
    },
    {
      "@type": "Question",
      name: "How does Softilo's 2-Year Software Ownership and Free Maintenance work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Educational and Travel ERP package at Softilo includes 2 Years of Free Maintenance (saving ৳2,000–৳3,000 per month) and grants full software ownership to the client after 2 years of continuous subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Where are Softilo's official social media profiles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Softilo's official website is https://softilo.io, our official LinkedIn company page is https://www.linkedin.com/company/softilo, and our official Facebook page is https://www.facebook.com/softilo0.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageFaqJsonLd),
        }}
      />
      <LandingPage />
    </>
  );
}
