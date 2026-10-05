import fs from "fs";

async function fetchHtml(url) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return { error: res.status };
    return { text: await res.text() };
  } catch (e) {
    return { error: e.message };
  }
}

async function run() {
  const targets = [
    { id: "refero", name: "styles.refero.design", urls: ["https://styles.refero.design", "https://styles.refero.design/sitemap.xml"] },
    { id: "beautifului", name: "beautifului.dev", urls: ["https://www.beautifului.dev", "https://www.beautifului.dev/components", "https://www.beautifului.dev/sitemap.xml"] },
    { id: "veloraui", name: "veloraui.com", urls: ["https://veloraui.com", "https://veloraui.com/components", "https://veloraui.vercel.app"] },
    { id: "rareui", name: "rareui.com", urls: ["https://www.rareui.com/components", "https://www.rareui.com/sitemap.xml"] },
    { id: "transitions", name: "transitions.dev", urls: ["https://transitions.dev/library.html", "https://transitions.dev/sitemap.xml"] },
    { id: "tailark", name: "tailark.com", urls: ["https://tailark.com/blocks", "https://tailark.com/sitemap.xml"] },
    { id: "skiper", name: "skiper-ui.com", urls: ["https://skiper-ui.com/components", "https://skiper-ui.com/sitemap.xml"] },
    { id: "shadcnstudio", name: "shadcnstudio.com", urls: ["https://shadcnstudio.com/blocks", "https://shadcnstudio.com/components", "https://shadcnstudio.com/sitemap.xml"] },
    { id: "boardui", name: "boardui.com", urls: ["https://www.boardui.com/zh-hans/components", "https://www.boardui.com/sitemap.xml"] },
    { id: "shadcn-io", name: "shadcn.io", urls: ["https://www.shadcn.io/blocks", "https://www.shadcn.io/template", "https://www.shadcn.io/sitemap.xml"] },
  ];

  const analysis = {};

  for (const t of targets) {
    console.log(`Analyzing [${t.name}]...`);
    const discovered = new Set();

    for (const url of t.urls) {
      const res = await fetchHtml(url);
      if (res.text) {
        // XML sitemap matches
        if (url.includes("sitemap.xml")) {
          const locs = [...res.text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
          for (const l of locs) {
            discovered.add(l);
          }
        } else {
          // HTML links
          const hrefs = [...res.text.matchAll(/href="([^"#?]+)"/g)].map(m => m[1]);
          for (const h of hrefs) {
            if (h.startsWith("http") || h.startsWith("/")) {
              discovered.add(h);
            }
          }
        }
      }
    }

    const allDiscovered = [...discovered];
    // Filter relevant slugs
    const componentLike = allDiscovered.filter(u => {
      const lower = u.toLowerCase();
      return (
        lower.includes("/components/") ||
        lower.includes("/blocks/") ||
        lower.includes("/component/") ||
        lower.includes("/block/") ||
        lower.includes("/library/") ||
        lower.includes("/style/") ||
        lower.includes("/template/") ||
        lower.includes("/templates/")
      );
    });

    analysis[t.id] = {
      name: t.name,
      totalLinksDiscovered: allDiscovered.length,
      componentLikeUrls: [...new Set(componentLike)],
    };

    console.log(`  -> Found ${componentLike.length} component/block URLs (Total links: ${allDiscovered.length})`);
  }

  fs.writeFileSync("./scripts/under20-deep-analysis.json", JSON.stringify(analysis, null, 2));
  console.log("Analysis saved to scripts/under20-deep-analysis.json");
}

run();
