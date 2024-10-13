// app/api/sitemap/route.ts
export async function GET(request: Request): Promise<Response> {
    const baseUrl = 'https://watersindia.com'; // Change this to your actual domain
  
    // Example static URLs
    const urls = [
      { loc: '/', lastmod: new Date().toDateString(), priority: 1.0 },
      { loc: '/blogs', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/products', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/biogas-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/dm-edi-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/etp-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/fftr-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/psb-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/ro-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/sp-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/stp-project', lastmod: new Date().toDateString(), priority: 0.8 },
      { loc: '/blog/wtp-project', lastmod: new Date().toDateString(), priority: 0.8 },
    ];
  
    // Generate XML for sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${baseUrl}${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <priority>${url.priority}</priority>
        </url>`
        )
        .join('')}
    </urlset>`;
  
    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  