import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://softilo.io";

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Softilo  | Custom Software, ERP, Branding & Digital Growth",
    template: "%s | Softilo ",
  },
  description:
    "Softilo is a premier software engineering and digital transformation agency in Bangladesh specializing in Custom Software, Educational ERP & LMS, Travel Agency ERP, Branding, UI/UX Design, and Digital Growth.",
  applicationName: "Softilo ",
  keywords: [
    "Softilo",
    "Softilo",
    "Software Company in Bangladesh",
    "Custom Software Development",
    "Educational ERP Bangladesh",
    "Coaching Center Management Software",
    "LMS Platform Bangladesh",
    "Travel Agency ERP Software",
    "Hajj Umrah Management Software",
    "Web Application Development",
    "UI/UX Design Agency",
    "Brand Identity Design",
    "Digital Marketing Agency Bangladesh",
    "Next.js Development Agency",
  ],
  authors: [{ name: "Softilo", url: SITE_URL }],
  creator: "Softilo",
  publisher: "Softilo",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Softilo",
    title: "Softilo  | Building Brands That Dominate Digitally",
    description:
      "Enterprise-grade Custom Software, Educational & Travel ERP Systems, High-Impact Branding, and Digital Growth Solutions with 2 Years Free Maintenance & Full Software Ownership.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Softilo Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softilo  | Custom Software, ERP & Digital Growth",
    description:
      "Enterprise-grade Custom Software, Educational & Travel ERP Systems, Branding, and Digital Growth Solutions.",
    images: ["/logo.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/logo.jpg" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Softilo",
      alternateName: "Softilo",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
        width: 800,
        height: 800,
      },
      image: `${SITE_URL}/logo.jpg`,
      description:
        "Softilo is a full-service software engineering and digital agency delivering custom web applications, Educational LMS/ERP, Travel Agency ERP, branding, and performance marketing.",
      email: "hello.softilo@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
      },
      sameAs: [
        "https://www.facebook.com/softilo0",
        "https://www.linkedin.com/company/softilo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Softilo",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Softilo",
      image: `${SITE_URL}/logo.jpg`,
      url: SITE_URL,
      priceRange: "৳৳",
      email: "hello.softilo@gmail.com",
      sameAs: [
        "https://www.facebook.com/softilo0",
        "https://www.linkedin.com/company/softilo",
      ],
      areaServed: ["BD", "US", "GB", "AE"],
      knowsAbout: [
        "Custom Software Development",
        "Educational ERP & LMS Systems",
        "Travel Agency Booking & ERP Software",
        "Web Application Architecture",
        "UI/UX & Product Design",
        "Corporate Branding & Video Production",
        "Performance Digital Marketing",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
