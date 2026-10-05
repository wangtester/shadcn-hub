import fs from "fs";

// Read local counts from registry
const reg = fs.readFileSync("./src/data/components-registry.ts", "utf-8");
const localCounts = {};
for (const m of reg.matchAll(/siteId:\s*"([^"]+)"/g)) {
  localCounts[m[1]] = (localCounts[m[1]] || 0) + 1;
}

const TARGETS = [
  { id: "shadcn", name: "ui.shadcn.com", sitemap: "https://ui.shadcn.com/sitemap.xml", filter: u => u.includes('/docs/components/') || u.includes('/blocks/') },
  { id: "magicui", name: "magicui.design", sitemap: "https://magicui.design/sitemap.xml", filter: u => u.includes('/docs/components/') },
  { id: "aceternity", name: "ui.aceternity.com", sitemap: "https://ui.aceternity.com/sitemap.xml", filter: u => u.includes('/components/') || u.includes('/blocks/') },
  { id: "shadcnblocks", name: "shadcnblocks.com", sitemap: "https://www.shadcnblocks.com/sitemap.xml", filter: u => u.includes('/blocks/') || u.includes('/components/') },
  { id: "shadcnstore", name: "shadcnstore.com", sitemap: "https://shadcnstore.com/sitemap.xml", filter: u => u.includes('/blocks/') },
  { id: "origin-ui", name: "originui.com", sitemap: "https://originui.com/sitemap.xml", url: "https://originui.com", filter: u => true },
  { id: "eldora", name: "eldoraui.site", sitemap: "https://www.eldoraui.site/sitemap.xml", filter: u => u.includes('/docs/components/') },
  { id: "skiper", name: "skiper-ui.com", sitemap: "https://skiper-ui.com/sitemap.xml", filter: u => u.includes('/components/') },
  { id: "kibo", name: "kibo-ui.com", url: "https://www.kibo-ui.com/components/table" },
  { id: "kokonut", name: "kokonutui.com", sitemap: "https://kokonutui.com/sitemap.xml", url: "https://kokonutui.com" },
  { id: "motion-primitives", name: "motion-primitives.com", url: "https://motion-primitives.com/" },
  { id: "shadcn-charts", name: "shadcn/ui Charts", url: "https://ui.shadcn.com/charts" },
  { id: "rareui", name: "rareui.com", url: "https://www.rareui.com/components" },
  { id: "transitions", name: "transitions.dev", url: "https://transitions.dev/library.html" },
  { id: "beautifului", name: "beautifului.dev", url: "https://www.beautifului.dev" },
  { id: "tailark", name: "tailark.com", sitemap: "https://tailark.com/sitemap.xml", url: "https://tailark.com/blocks" },
  { id: "shadcnspace", name: "shadcnspace.com", url: "https://shadcnspace.com/components" },
  { id: "21st", name: "21st.dev", url: "https://21st.dev/community/components" },
  { id: "heroui", name: "heroui.pro", url: "https://heroui.pro/docs/react/components" },
  { id: "boardui", name: "boardui.com", url: "https://www.boardui.com/zh-hans/components" },
  { id: "refero", name: "styles.refero.design", url: "https://styles.refero.design" },
  { id: "reui", name: "reui.io", url: "https://reui.io/components" },
  { id: "mynaui", name: "mynaui.com", url: "https://mynaui.com/" },
  { id: "shadcnstudio", name: "shadcnstudio.com", url: "https://shadcnstudio.com/blocks" },
  { id: "animate-ui", name: "animate-ui.com", url: "https://animate-ui.com/docs/components" },
  { id: "veloraui", name: "veloraui.com", url: "https://veloraui.com/" },
];

async function checkSite(target) {
  const result = {
    id: target.id,
    name: target.name,
    localCount: localCounts[target.id] || 0,
    remoteCount: 0,
    sampleSlugs: [],
    status: "ok",
    note: ""
  };

  // 1. Try sitemap
  if (target.sitemap) {
    try {
      const res = await fetch(target.sitemap, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(6000)
      });
      if (res.ok) {
        const text = await res.text();
        const urls = [...text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
        const filtered = target.filter ? urls.filter(target.filter) : urls;
        if (filtered.length > 0) {
          result.remoteCount = filtered.length;
          result.sampleSlugs = filtered.slice(0, 5);
          return result;
        }
      }
    } catch (e) {
      // ignore, fall back to page scrape
    }
  }

  // 2. Try page fetch
  const pageUrl = target.url || target.sitemap;
  if (pageUrl) {
    try {
      const res = await fetch(pageUrl, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(6000)
      });
      if (res.ok) {
        const text = await res.text();
        const hrefs = [...text.matchAll(/href="(\/[^"]+)"/g)].map(m => m[1]);
        const compHrefs = hrefs.filter(h =>
          h.includes('/components/') ||
          h.includes('/docs/components/') ||
          h.includes('/blocks/') ||
          h.includes('/library/') ||
          h.includes('/components')
        );
        const unique = [...new Set(compHrefs)];
        result.remoteCount = unique.length;
        result.sampleSlugs = unique.slice(0, 5);
      }
    } catch (e) {
      result.status = "error: " + e.message;
    }
  }

  return result;
}

async function run() {
  console.log("Auditing all 26 remaining sites...");
  const results = [];
  for (const t of TARGETS) {
    const r = await checkSite(t);
    results.push(r);
    console.log(`[${r.name.padEnd(22)}] Local: ${String(r.localCount).padStart(2)} | Remote Discovered: ${String(r.remoteCount).padStart(3)} | Status: ${r.status}`);
  }

  fs.writeFileSync("./scripts/audit-results-all.json", JSON.stringify(results, null, 2));
}

run();
