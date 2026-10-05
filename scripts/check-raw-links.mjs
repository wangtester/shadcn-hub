import fs from "fs";

// Let's re-fetch beautifului, skiper-ui, transitions, tailark to see raw links
async function checkLinks(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(6000) });
    const text = await res.text();
    const hrefs = [...text.matchAll(/href="([^"#?]+)"/g)].map(m => m[1]);
    return [...new Set(hrefs)];
  } catch (e) {
    return [e.message];
  }
}

async function run() {
  const sites = [
    ["skiper", "https://skiper-ui.com/sitemap.xml"],
    ["transitions", "https://transitions.dev/library.html"],
    ["beautifului", "https://www.beautifului.dev"],
    ["tailark", "https://tailark.com/blocks"],
  ];
  for (const [name, url] of sites) {
    const links = await checkLinks(url);
    console.log(`[${name}] links (${links.length}):`, links.slice(0, 15));
  }
}

run();
