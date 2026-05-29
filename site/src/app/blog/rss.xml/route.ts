import { getAllPosts } from "@/lib/mdx";

export async function GET() {
  const posts = await getAllPosts();
  const baseUrl = "https://agentic-agency.fr";
  const recentPosts = posts.slice(0, 50);

  const items = recentPosts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <category>${post.category}</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Agentic Agency</title>
    <link>${baseUrl}/blog</link>
    <description>Articles sur le delivery moderne, les bonnes pratiques de développement et nos retours d'expérience.</description>
    <language>fr</language>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
