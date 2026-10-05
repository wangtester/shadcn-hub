import fs from 'fs';

async function main() {
  const regMod = await import('../src/data/components-registry.ts');
  const items = regMod.REGISTRY_DATA;
  const sites = regMod.SITES_METADATA;

  console.log('Total items:', items.length);

  const siteReports = {};

  for (const site of sites) {
    const siteItems = items.filter(i => i.siteId === site.id);
    const report = {
      siteId: site.id,
      siteName: site.name,
      totalItems: siteItems.length,
      duplicateUrls: [],
      aggregationUrls: [],
      duplicateNamesOrSlugs: [],
    };

    // 1. Group by URL
    const urlMap = new Map();
    for (const item of siteItems) {
      const u = item.originUrl.replace(/\/+$/, '').toLowerCase();
      if (!urlMap.has(u)) urlMap.set(u, []);
      urlMap.get(u).push(item);
    }
    for (const [u, list] of urlMap.entries()) {
      if (list.length > 1) {
        report.duplicateUrls.push({ url: u, count: list.length, items: list.map(x => ({ id: x.id, name: x.name, originUrl: x.originUrl })) });
      }
    }

    // 2. Aggregation URLs
    const aggPatterns = [
      /\/components\/?$/,
      /\/blocks\/?$/,
      /\/templates\/?$/,
      /\/docs\/?$/,
      /\/docs\/components\/?$/,
      /\/library\.html\/?$/,
      /\/inputs\/?$/
    ];
    for (const item of siteItems) {
      try {
        const u = new URL(item.originUrl);
        const path = u.pathname.replace(/\/+$/, '');
        if (path === '' || aggPatterns.some(p => p.test(item.originUrl))) {
          report.aggregationUrls.push({ id: item.id, name: item.name, originUrl: item.originUrl });
        }
      } catch (e) {}
    }

    // 3. Name or slug collision (e.g. Radix vs Base or identical component name)
    const nameMap = new Map();
    for (const item of siteItems) {
      // canonical name
      const n = item.name.toLowerCase().replace(/^(ui|the|shadcn|\w+\.com|\w+\.design|\w+\s+ui)\s*/i, '').trim();
      if (!nameMap.has(n)) nameMap.set(n, []);
      nameMap.get(n).push(item);
    }
    for (const [n, list] of nameMap.entries()) {
      if (list.length > 1) {
        report.duplicateNamesOrSlugs.push({ name: n, count: list.length, items: list.map(x => ({ id: x.id, name: x.name, originUrl: x.originUrl })) });
      }
    }

    siteReports[site.id] = report;
  }

  for (const [id, r] of Object.entries(siteReports)) {
    const hasIssues = r.duplicateUrls.length > 0 || r.aggregationUrls.length > 0 || r.duplicateNamesOrSlugs.length > 0;
    if (hasIssues) {
      console.log(`\n======================================================`);
      console.log(`SITE [${id}] - ${r.siteName} (${r.totalItems} items)`);
      if (r.duplicateUrls.length > 0) {
        console.log(`  🚨 Duplicate URLs (${r.duplicateUrls.length}):`);
        for (const d of r.duplicateUrls) {
          console.log(`     - [${d.count}x] ${d.url} :: ${d.items.map(x => x.id).join(', ')}`);
        }
      }
      if (r.aggregationUrls.length > 0) {
        console.log(`  ⚠️ Aggregation/Index URLs (${r.aggregationUrls.length}):`);
        for (const a of r.aggregationUrls) {
          console.log(`     - ${a.id} (${a.name}) -> ${a.originUrl}`);
        }
      }
      if (r.duplicateNamesOrSlugs.length > 0) {
        console.log(`  🔄 Duplicate Component Names (${r.duplicateNamesOrSlugs.length}):`);
        for (const d of r.duplicateNamesOrSlugs.slice(0, 8)) {
          console.log(`     - "${d.name}" (${d.count}x): ${d.items.map(x => x.id + ' [' + x.originUrl + ']').join(' vs ')}`);
        }
        if (d => d.duplicateNamesOrSlugs.length > 8) console.log(`     ... and more`);
      }
    }
  }

  fs.writeFileSync('./scripts/audit-report.json', JSON.stringify(siteReports, null, 2));
  console.log('\nReport written to scripts/audit-report.json');
}

main();
