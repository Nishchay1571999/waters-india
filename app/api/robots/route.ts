// app/api/robots/route.ts
export async function GET(request: Request): Promise<Response> {
    const robotsTxt = `
      User-agent: *
      Disallow: /private
      Allow: /
  
      Sitemap: https://watersindia.com/sitemap.xml
    `;
  
    return new Response(robotsTxt, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  