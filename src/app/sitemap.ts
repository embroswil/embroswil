import { MetadataRoute } from "next";
import { getProjets } from "@/lib/projets";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://embroswil.com";

// Plan du site pour Google : pages principales + une page par projet
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projets = await getProjets();
  const maintenant = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: maintenant, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/project`, lastModified: maintenant, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: maintenant, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: maintenant, changeFrequency: "yearly", priority: 0.5 },
    ...projets.map((p) => ({
      url: `${SITE_URL}/project/${p.slug}`,
      lastModified: maintenant,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
