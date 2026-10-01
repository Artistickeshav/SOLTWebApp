import type { MetadataRoute } from "next";
const routes = ["", "/about", "/our-work", "/impact", "/resources", "/stories", "/get-involved", "/contact", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return routes.map((route) => ({ url: new URL(route, siteUrl).toString(), lastModified: new Date() }));
}
