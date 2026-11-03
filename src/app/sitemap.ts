import type { MetadataRoute } from "next";
import { getAllServices } from "@/data/data";

const SITE_URL ="https://softilo.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getAllServices();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority:
      service.slug === "educational-solutions" ||
      service.slug === "travel-solutions"
        ? 0.95
        : 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

