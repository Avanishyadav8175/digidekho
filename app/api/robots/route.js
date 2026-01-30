import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow admin areas
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /services/
Allow: /blog/
Allow: /projects/
Allow: /products/

# Sitemap
Sitemap: https://digitaldekho.com/sitemap.xml

# Crawl delay
Crawl-delay: 1`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}