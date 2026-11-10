import type { Metadata, Viewport } from "next";
import "./globals.css";
import { teamData } from "@/data/team.data";
import { getAllServices } from "@/data/data";

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
    default:
      "Softilo (softilo.io) | Custom Software, Educational & Travel ERP, Branding & Digital Growth",
    template: "%s | Softilo",
  },
  description:
    "Softilo (softilo.io) is an official software engineering and digital transformation agency founded by Safayet Hossan Safin and led with COO Jahedul Alam. Specializing in Custom Software, Educational ERP & LMS, Travel Agency ERP, UI/UX Design, Branding, and Digital Growth.",
  applicationName: "Softilo",
  keywords: [
    "Softilo",
    "softilo.io",
    "Softilo Agency",
    "Softilo Official",
    "Softilo Bangladesh",
    "Softilo Software Company",
    "Safayet Hossan Safin",
    "Jahedul Alam",
    "Belal Hossain",
    "Muntasir Mahmud",
    "Shawon Devnath",
    "Siam Patwary Noman",
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
  authors: [
    { name: "Softilo", url: SITE_URL },
    { name: "Safayet Hossan Safin", url: "https://safayet-hossan.vercel.app" },
    { name: "Jahedul Alam", url: "https://jahedul-alam.vercel.app/" },
  ],
  creator: "Softilo (softilo.io)",
  publisher: "Softilo",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Softilo",
    title: "Softilo (softilo.io) | Building Brands That Dominate Digitally",
    description:
      "Official website of Softilo (softilo.io) — Enterprise Custom Software, Educational & Travel ERP Systems, High-Impact Branding, and Digital Growth Solutions with 2 Years Free Maintenance & Full Software Ownership.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Softilo (softilo.io) Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softilo (softilo.io) | Custom Software, ERP & Digital Growth",
    description:
      "Official website of Softilo (softilo.io) — Enterprise Custom Software, Educational & Travel ERP Systems, Branding, and Digital Growth Solutions.",
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

const allServices = getAllServices();

const personGraphNodes = teamData.map((member) => {
  const sameAsLinks = [
    member.portfolio,
    member.socialUrl.linkedin,
    member.socialUrl.github,
    member.socialUrl.twitter,
  ].filter((link): link is string => Boolean(link && link.trim().length > 0));

  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-${member.slug}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: `${SITE_URL}${member.image}`,
    url: member.portfolio || `${SITE_URL}/#team`,
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    ...(member.knowsAbout ? { knowsAbout: member.knowsAbout } : {}),
    ...(sameAsLinks.length > 0 ? { sameAs: sameAsLinks } : {}),
  };
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Softilo",
      legalName: "Softilo",
      alternateName: [
        "Softilo Agency",
        "Softilo Official",
        "softilo.io",
        "Softilo Software & Digital Agency",
        "Softilo Bangladesh",
      ],
      url: SITE_URL,
      mainEntityOfPage: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo.jpg`,
        contentUrl: `${SITE_URL}/logo.jpg`,
        caption: "Softilo Official Logo",
        width: 800,
        height: 800,
      },
      image: `${SITE_URL}/logo.jpg`,
      description:
        "Softilo (softilo.io) is a full-service software engineering and digital agency delivering custom web applications, Educational LMS/ERP, Travel Agency ERP, UI/UX design, branding, and performance marketing.",
      email: "hello.softilo@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chattogram",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello.softilo@gmail.com",
        contactType: "customer support",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English", "Bengali"],
      },
      founder: [
        { "@id": `${SITE_URL}/#person-safayet-hossan-safin` },
      ],
      employee: teamData.map((member) => ({
        "@id": `${SITE_URL}/#person-${member.slug}`,
      })),
      sameAs: [
        "https://www.facebook.com/softilo0",
        "https://www.linkedin.com/company/softilo",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Softilo Software, ERP & Digital Agency Services",
        itemListElement: allServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.shortDesc,
            url: `${SITE_URL}/services/${service.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Softilo",
      alternateName: ["Softilo Agency", "softilo.io", "Softilo Official"],
      description:
        "Official website of Softilo (softilo.io) — Custom Software, Educational & Travel ERP, Branding & Digital Growth.",
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
        "AI Workflow Automation",
        "Web Application Architecture",
        "UI/UX & Product Design",
        "Corporate Branding & Video Production",
        "Performance Digital Marketing",
      ],
    },
    ...personGraphNodes,
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
