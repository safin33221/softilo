import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/data/data";
import { ServiceDetailView } from "@/components/services/service-detail-view";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://softilo.io";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  const canonicalPath = `/services/${service.slug}`;

  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.shortDesc,
    keywords: [
      service.title,
      service.tagline,
      "Softilo Agency",
      "Software Ownership after 2 Years",
      "2 Years Free Maintenance",
      ...service.features,
      ...service.techStack,
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${service.title} - ${service.tagline} | Softilo Agency`,
      description: service.shortDesc,
      url: canonicalPath,
      type: "website",
      images: [
        {
          url: "/logo.jpg",
          width: 800,
          height: 800,
          alt: `${service.title} | Softilo Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Softilo Agency`,
      description: service.shortDesc,
      images: ["/logo.jpg"],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}#service`,
        name: service.title,
        description: service.fullDesc,
        slogan: service.tagline,
        url: `${SITE_URL}/services/${service.slug}`,
        image: `${SITE_URL}/logo.jpg`,
        provider: {
          "@type": "Organization",
          name: "Softilo Agency",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.jpg`,
        },
        areaServed: {
          "@type": "Country",
          name: "Bangladesh",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Deliverables`,
          itemListElement: service.featureHighlights.map((feature) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: feature.title,
              description: feature.description,
            },
          })),
        },
      },
      ...(service.faq && service.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/services/${service.slug}#faq`,
              mainEntity: service.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetailView service={service} allServices={allServices} />
    </>
  );
}
