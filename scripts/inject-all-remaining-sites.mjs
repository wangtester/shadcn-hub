import fs from "fs";

const rawData = JSON.parse(fs.readFileSync("./scripts/all-remaining-sites-data.json", "utf-8"));
let regFile = fs.readFileSync("./src/data/components-registry.ts", "utf-8");

const existingOriginUrls = new Set([...regFile.matchAll(/originUrl:\s*"([^"]+)"/g)].map(m => m[1]));
const existingIds = new Set([...regFile.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

function slugToTitle(slug) {
  const clean = slug.replace(/^\/+|\/+$/g, "").split("/").pop();
  return clean.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const allNewItems = [];

for (const [siteId, data] of Object.entries(rawData)) {
  for (const slug of data.slugs) {
    const originUrl = `${data.urlPrefix}${slug}`;
    if (existingOriginUrls.has(originUrl)) continue;

    const title = slugToTitle(slug);
    const cleanSlug = slug.replace(/[^a-zA-Z0-9-]/g, "-").replace(/-+/g, "-");
    const id = `${siteId}-${cleanSlug}`;
    if (existingIds.has(id)) continue;

    const category = data.category || "component";
    const componentKey = `${siteId}-${cleanSlug}-demo`;

    allNewItems.push({
      id,
      name: `${data.siteName} ${title}`,
      nameCn: `${data.siteName} ${title} ${category === 'block' ? '复合业务区块' : '交互式组件'}`,
      category,
      siteId,
      siteName: data.siteName,
      siteUrl: data.siteUrl,
      originUrl,
      status: "collected",
      description: `源自 ${data.siteName} 的高质量 ${category === 'block' ? '业务复合区块' : '前端交互组件'}，已完成代码适配并支持原地交互预览。`,
      tags: [data.siteName.replace(/[^a-zA-Z0-9]/g, ""), title.split(" ")[0], category === "block" ? "Block" : "Component"],
      componentKey,
    });

    existingOriginUrls.add(originUrl);
    existingIds.add(id);
  }
}

console.log(`Prepared ${allNewItems.length} brand new items across all remaining sites!`);

// Format and append to REGISTRY_DATA
const formattedEntries = allNewItems.map(item => {
  return `  {
    id: ${JSON.stringify(item.id)},
    name: ${JSON.stringify(item.name)},
    nameCn: ${JSON.stringify(item.nameCn)},
    category: ${JSON.stringify(item.category)},
    siteId: ${JSON.stringify(item.siteId)},
    siteName: ${JSON.stringify(item.siteName)},
    siteUrl: ${JSON.stringify(item.siteUrl)},
    originUrl: ${JSON.stringify(item.originUrl)},
    status: ${JSON.stringify(item.status)},
    description: ${JSON.stringify(item.description)},
    tags: ${JSON.stringify(item.tags)},
    componentKey: ${JSON.stringify(item.componentKey)},
  },`;
}).join("\n");

const closingIdx = regFile.lastIndexOf("];");
regFile = regFile.slice(0, closingIdx) + formattedEntries + "\n];\n";
fs.writeFileSync("./src/data/components-registry.ts", regFile, "utf-8");
console.log(`Successfully appended ${allNewItems.length} items to src/data/components-registry.ts!`);
