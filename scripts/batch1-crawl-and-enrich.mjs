import fs from "fs";

async function fetchSitemap(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const text = await res.text();
    return [...text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
  } catch (e) {
    return [];
  }
}

async function run() {
  console.log("Crawling Batch 1: shadcn, magicui, shadcnblocks, origin-ui, kibo...");

  // 1. shadcn (ui.shadcn.com)
  const shadcnUrls = (await fetchSitemap("https://ui.shadcn.com/sitemap.xml"))
    .filter(u => u.includes('/docs/components/') && !u.includes('/aria/'))
    .map(u => u.split('/docs/components/')[1])
    .filter(Boolean);
  const uniqueShadcn = [...new Set(shadcnUrls)].filter(s => !['installation', 'typography', 'figma', 'dark-mode'].includes(s));
  console.log(`shadcn: found ${uniqueShadcn.length} components`);

  // 2. magicui (magicui.design)
  const magicUrls = (await fetchSitemap("https://magicui.design/sitemap.xml"))
    .filter(u => u.includes('/docs/components/'))
    .map(u => u.split('/docs/components/')[1])
    .filter(Boolean);
  const uniqueMagic = [...new Set(magicUrls)];
  console.log(`magicui: found ${uniqueMagic.length} components`);

  // 3. shadcnblocks (shadcnblocks.com)
  const blockUrls = (await fetchSitemap("https://www.shadcnblocks.com/sitemap.xml"))
    .filter(u => u.includes('/blocks/') || u.includes('/components/'))
    .map(u => {
      const match = u.match(/(?:blocks|components)\/([a-zA-Z0-9-]+)/);
      return match ? match[1] : null;
    })
    .filter(Boolean);
  const uniqueBlocks = [...new Set(blockUrls)].filter(s => !['free', 'pro', 'all', 'pricing', 'login', 'signup'].includes(s));
  console.log(`shadcnblocks: found ${uniqueBlocks.length} categories/blocks`);

  // 4. origin-ui (originui.com)
  const originSlugs = [
    "accordion", "alert", "alert-dialog", "avatar", "badge", "breadcrumb", "button",
    "checkbox", "collapsible", "dialog", "drawer", "dropdown-menu", "input", "input-otp",
    "label", "pagination", "popover", "progress", "radio-group", "select", "separator",
    "sheet", "skeleton", "slider", "switch", "table", "tabs", "textarea", "tooltip"
  ];
  console.log(`origin-ui: ${originSlugs.length} standard component suites`);

  // 5. kibo (kibo-ui.com)
  const kiboSlugs = [
    "table", "kanban", "gantt", "timeline", "calendar", "audio", "video",
    "command", "combobox", "avatar-stack", "cursor", "dialog", "drawer",
    "empty-state", "file-upload", "input-otp", "marquee", "metric", "pagination",
    "progress", "resizable", "scroll-area", "select", "sheet", "skeleton",
    "slider", "stat", "steps", "switch", "tabs", "tag", "tooltip"
  ];
  console.log(`kibo: ${kiboSlugs.length} components`);

  fs.writeFileSync("./scripts/batch1-data.json", JSON.stringify({
    shadcn: uniqueShadcn,
    magicui: uniqueMagic,
    shadcnblocks: uniqueBlocks,
    originui: originSlugs,
    kibo: kiboSlugs
  }, null, 2));
}

run();
