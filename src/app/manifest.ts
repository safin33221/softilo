import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Softilo Agency — Custom Software, ERP & Digital Growth",
    short_name: "Softilo",
    description:
      "Enterprise-grade Custom Software, Educational & Travel ERP Systems, Branding, and Digital Growth Solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}

