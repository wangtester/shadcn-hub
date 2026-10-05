async function getAllBeUISlugs() {
  const urls = [
    "https://beui.dev/sitemap.xml",
    "https://beui.dev/components/motion",
    "https://beui.dev/components/blocks",
    "https://beui.dev/components/agents",
  ];

  const allSlugs = new Set();
  const slugDetails = [];

  for (const u of urls) {
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) });
      const text = await res.text();
      
      const matches = [...text.matchAll(/href="(\/components\/[^"]+)"/g)].map(m => m[1]);
      const xmlMatches = [...text.matchAll(/<loc>(https:\/\/beui\.dev\/components\/[^<]+)<\/loc>/g)].map(m => {
        return m[1].replace('https://beui.dev', '');
      });

      for (const link of [...matches, ...xmlMatches]) {
        // filter out pure landing pages like /components/motion, /components/blocks, /components/agents
        if (link === '/components/motion' || link === '/components/blocks' || link === '/components/agents' || link === '/components') {
          continue;
        }
        allSlugs.add(link);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  const sortedList = [...allSlugs].sort();
  console.log(`TOTAL UNIQUE COMPONENT SLUGS FOUND: ${sortedList.length}`);
  console.log(JSON.stringify(sortedList, null, 2));
}

getAllBeUISlugs();
