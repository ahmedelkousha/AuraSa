// generate-sitemap.js
// Place this in your project root and run: node generate-sitemap.js

import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = "https://auramarketingsa.com";
const currentDate = new Date().toISOString().split("T")[0];

// Define all your routes
const routes = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "weekly",
    images: [],
  },
  {
    path: "/services/social-media",
    priority: 0.9,
    changefreq: "monthly",
    images: [
      {
        loc: "/assets/smm-service/socialHero.webp",
        title: "Social Media Management Services",
        caption: "Professional social media management by Aura Marketing",
      },
    ],
  },
  {
    path: "/services/motion-graphics",
    priority: 0.9,
    changefreq: "monthly",
    images: [
      {
        loc: "/assets/motion-graphics/motionHero.webp",
        title: "Motion Graphics & Video Editing Services",
        caption:
          "Professional motion graphics and video editing by Aura Marketing",
      },
    ],
  },
  {
    path: "/services/campaigns",
    priority: 0.9,
    changefreq: "monthly",
    images: [
      {
        loc: "/assets/ads-service/adsHero.webp",
        title: "Paid Advertising Campaign Management Services",
        caption:
          "Professional paid advertising campaign management by Aura Marketing",
      },
    ],
  },
  {
    path: "/services/ecommerce",
    priority: 0.9,
    changefreq: "monthly",
    images: [
      {
        loc: "/assets/ecommerce/ecommerceHero.webp",
        title: "E-commerce Website Design & Development Services",
        caption:
          "Professional e-commerce website development by Aura Marketing",
      },
    ],
  },
  {
    path: "/portfolio",
    priority: 0.8,
    changefreq: "weekly",
    images: [],
  },
  {
    path: "/profile",
    priority: 0.7,
    changefreq: "monthly",
    images: [],
  },
  {
    path: "/success-story",
    priority: 0.8,
    changefreq: "monthly",
    images: [],
  },
  {
    path: "/blog/ecommerce-guide",
    priority: 0.7,
    changefreq: "monthly",
    images: [],
  },
  {
    path: "/blog/gulf-trend",
    priority: 0.7,
    changefreq: "monthly",
    images: [],
  },
  {
    path: "/blog/commerce-future-2026",
    priority: 0.7,
    changefreq: "monthly",
    images: [],
  },
  {
    path: "/terms",
    priority: 0.3,
    changefreq: "yearly",
    images: [],
  },
  {
    path: "/privacy",
    priority: 0.3,
    changefreq: "yearly",
    images: [],
  },
];

// Generate XML
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  routes.forEach((route) => {
    const url = `${SITE_URL}${route.path}`;

    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${url}" />
`;

    // Add images if any
    route.images.forEach((image) => {
      xml += `    <image:image>
      <image:loc>${SITE_URL}${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>
`;
    });

    xml += `  </url>
`;
  });

  xml += `</urlset>`;

  return xml;
}

// Write to file
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const outputPath = join(__dirname, "public", "sitemap.xml");

  fs.writeFileSync(outputPath, sitemapContent, "utf-8");
  console.log("✅ Sitemap generated successfully at:", outputPath);
  console.log(`📄 Total URLs: ${routes.length}`);
}

// Run
writeSitemap();
