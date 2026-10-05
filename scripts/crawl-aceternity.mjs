async function crawlAceternity() {
  const url = "https://ui.aceternity.com/sitemap.xml";
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) });
  const text = await res.text();

  const urls = [...text.matchAll(/<loc>(https:\/\/ui\.aceternity\.com\/components\/[^<]+)<\/loc>/g)].map(m => m[1]);
  const uniqueUrls = [...new Set(urls)].sort();

  console.log(`TOTAL ACETERNITY COMPONENT URLS FOUND: ${uniqueUrls.length}`);
  console.log(JSON.stringify(uniqueUrls, null, 2));

  fs.writeFileSync("./scripts/aceternity-slugs.json", JSON.stringify(uniqueUrls, null, 2));
}

crawlAceternity();
