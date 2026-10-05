async function crawlBeUI() {
  const urls = [
    "https://beui.dev/sitemap.xml",
    "https://beui.dev/components/motion",
    "https://beui.dev/components/blocks",
    "https://beui.dev/components/buttons",
    "https://beui.dev/components/cards",
    "https://beui.dev/components/interactive",
    "https://beui.dev/components/text",
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        signal: AbortSignal.timeout(8000),
      });
      console.log(`[${url}] Status: ${res.status}`);
      const text = await res.text();
      
      if (url.endsWith("sitemap.xml")) {
        const matches = [...text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
        console.log(`  Sitemap total URLs: ${matches.length}`);
        const comps = matches.filter(u => u.includes("/components/"));
        console.log(`  Component URLs (${comps.length}):`, comps);
      } else {
        // Find internal links to components
        const links = [...text.matchAll(/href="(\/components\/[^"]+)"/g)].map(m => m[1]);
        const uniqueLinks = [...new Set(links)];
        console.log(`  Found ${uniqueLinks.length} component links on page:`, uniqueLinks);

        // Also check if there are titles/headings or data-component or slug
        const h3s = [...text.matchAll(/<h[234][^>]*>(.*?)<\/h[234]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
        console.log(`  Headings/Names:`, h3s.slice(0, 15));
      }
    } catch (e) {
      console.log(`[${url}] Error: ${e.message}`);
    }
  }
}

crawlBeUI();
