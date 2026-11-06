export const prerender = true;

export function GET() {
  const body = ['User-agent: *', 'Allow: /', '', 'Disallow: /200.html', ''].join('\n');
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
