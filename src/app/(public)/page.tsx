import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Softilo | Building Brands That Dominate Digitally",
  description:
    "Full-stack software engineering, Educational LMS/ERP, Travel Agency ERP, high-impact branding, and digital growth solutions with 2 Years Free Maintenance and Full Software Ownership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Softilo | Building Brands That Dominate Digitally",
    description:
      "Full-stack software engineering, Educational LMS/ERP, Travel Agency ERP, high-impact branding, and digital growth solutions.",
    url: "/",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Softilo Logo",
      },
    ],
  },
};

export default function Page() {
  return <LandingPage />;
}
