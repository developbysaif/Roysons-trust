import { programsData } from "@/data/programsData";
import { projectsData } from "@/data/projectsData";
import { newsData } from "@/data/newsData";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/projects",
    "/impact",
    "/donate",
    "/transparency",
    "/get-involved",
    "/volunteer",
    "/partnerships",
    "/gallery",
    "/news",
    "/stories",
    "/leadership",
    "/certifications",
    "/faqs",
    "/contact",
    "/privacy",
    "/terms",
    "/safeguarding",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const programRoutes = programsData.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const newsRoutes = newsData.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...programRoutes, ...projectRoutes, ...newsRoutes];
}
