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
    ["shadcn-ui", "https://ui.shadcn.com/sitemap.xml"],
    ["shadcnblocks", "https://www.shadcnblocks.com/sitemap.xml"],
    ["shadcnstore", "https://shadcnstore.com/sitemap.xml"],
    ["origin-ui", "https://originui.com/sitemap.xml"],
    ["motion-primitives", "https://motion-primitives.com/sitemap.xml"],
    ["eldora-ui", "https://www.eldoraui.site/sitemap.xml"],
    ["skiper-ui", "https://skiper-ui.com/sitemap.xml"],
    ["tailark", "https://tailark.com/sitemap.xml"],
  ];
  for (const [name, url] of sites) {
    const result = await probeSite(name, url);
    if (result.text && result.status === 200) {
      const urls = [...result.text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
      console.log(`[${name}] Sitemap OK (${urls.length} URLs).`);
      const comps = urls.filter(u => u.includes('/components') || u.includes('/docs/components') || u.includes('/blocks') || u.includes('/charts'));
      console.log(`  -> Filtered Component/Block/Chart URLs: ${comps.length}`);
      if (comps.length > 0) console.log(`  -> Sample:`, comps.slice(0, 3));
    } else {
      console.log(`[${name}] Status: ${result.status || result.error}`);
    }
  }
}

run();
