import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tushank.dev"; // change to your domain
  const routes = ["", "/#experience", "/#skills", "/#contact"];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.6
  }));
}
