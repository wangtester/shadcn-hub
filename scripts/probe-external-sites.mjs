async function probeSite(name, url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(6000) });
    const text = await res.text();
    return { name, status: res.status, length: text.length, text };
  } catch (err) {
    return { name, error: err.message };
  }
}

async function run() {
  const sites = [
    ["magicui-sitemap", "https://magicui.design/sitemap.xml"],
    ["aceternity-sitemap", "https://ui.aceternity.com/sitemap.xml"],
    ["kibo-ui", "https://www.kibo-ui.com/sitemap.xml"],
    ["kokonut-ui", "https://kokonutui.com/sitemap.xml"],
  ];
  for (const [name, url] of sites) {
    const result = await probeSite(name, url);
    console.log(result.name, result.status || result.error, result.length ? `(${result.length} bytes)` : "");
    if (result.text) {
      // Find sample urls matching components/blocks
      const urls = [...result.text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
      console.log(`  -> Found ${urls.length} total URLs in sitemap`);
      const compUrls = urls.filter(u => u.includes('/components') || u.includes('/docs/components') || u.includes('/blocks'));
      console.log(`  -> Found ${compUrls.length} component/block URLs:`);
      console.log(`     Sample:`, compUrls.slice(0, 5));
    }
  }
}

run();
