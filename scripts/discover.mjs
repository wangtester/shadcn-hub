// Discover links and components across all target sites
import fs from 'fs';

async function fetchLinks(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      signal: AbortSignal.timeout(8000)
    });
    const text = await res.text();
    const regex = /href=["']([^"']+)["']/g;
    const matches = [];
    let m;
    while ((m = regex.exec(text)) !== null) {
      matches.push(m[1]);
    }
    return { ok: true, links: matches, title: (text.match(/<title>([^<]+)<\/title>/i) || [])[1] || '' };
  } catch (e) {
    return { ok: false, error: e.message, links: [] };
  }
}

async function main() {
  const sites = {
    '21st-dev-components': 'https://21st.dev/community/components',
    '21st-dev-templates': 'https://21st.dev/community/templates',
    'shadcnblocks-components': 'https://www.shadcnblocks.com/components',
    'shadcnblocks-blocks': 'https://www.shadcnblocks.com/blocks',
    'shadcnblocks-templates': 'https://www.shadcnblocks.com/templates',
    'shadcn-io-blocks': 'https://www.shadcn.io/blocks',
    'shadcn-io-templates': 'https://www.shadcn.io/template',
    'tailark': 'https://tailark.com/blocks',
    'veloraui': 'https://veloraui.com/',
    'motion-primitives': 'https://motion-primitives.com/',
    'skiper': 'https://skiper-ui.com/components',
    'eldora': 'https://www.eldoraui.site/docs/components',
    'kibo': 'https://www.kibo-ui.com/components/table',
    'kokonut': 'https://kokonutui.com/',
    'animate-ui': 'https://animate-ui.com/docs/components',
    'origin-ui': 'https://coss.com/ui',
    'reui': 'https://reui.io/components',
    'mynaui': 'https://mynaui.com/',
    'shadcn-charts': 'https://ui.shadcn.com/charts',
    'shadcnstudio': 'https://shadcnstudio.com/blocks'
  };

  const results = {};

  for (const [key, url] of Object.entries(sites)) {
    const res = await fetchLinks(url);
    if (!res.ok) {
      console.log(`[${key}] ERROR: ${res.error}`);
      results[key] = { error: res.error, items: [] };
      continue;
    }

    // Filter relevant links
    const unique = [...new Set(res.links)].filter(l => 
      !l.startsWith('#') && !l.startsWith('mailto:') && !l.startsWith('tel:') && !l.startsWith('javascript:')
    );

    const filtered = unique.filter(l => 
      l.includes('/components') || 
      l.includes('/blocks') || 
      l.includes('/docs/components') || 
      l.includes('/template') || 
      l.includes('/templates') || 
      l.includes('/ui/') || 
      l.includes('/charts/') ||
      l.includes('/docs/')
    );

    console.log(`[${key}] title: "${res.title}", total links: ${unique.length}, relevant: ${filtered.length}`);
    results[key] = {
      title: res.title,
      relevantLinks: filtered.slice(0, 30)
    };
  }

  fs.writeFileSync('scripts/discover-results.json', JSON.stringify(results, null, 2));
  console.log('Saved to scripts/discover-results.json');
}

main();
