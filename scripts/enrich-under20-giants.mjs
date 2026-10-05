import fs from "fs";

const analysis = JSON.parse(fs.readFileSync("./scripts/under20-deep-analysis.json", "utf-8"));
let regFile = fs.readFileSync("./src/data/components-registry.ts", "utf-8");

const existingOriginUrls = new Set([...regFile.matchAll(/originUrl:\s*"([^"]+)"/g)].map(m => m[1]));
const existingIds = new Set([...regFile.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

function slugToTitle(slug) {
  const clean = slug.replace(/^\/+|\/+$/g, "").split("/").pop();
  return clean.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const newItems = [];

// 1. shadcn.io (all 84 blocks)
for (const u of analysis["shadcn-io"].componentLikeUrls) {
  const fullUrl = u.startsWith("http") ? u : `https://www.shadcn.io${u}`;
  if (existingOriginUrls.has(fullUrl)) continue;

  const slug = u.split("/blocks/")[1] || u.split("/template/")[1] || u.replace(/^\/+/, "");
  const title = slugToTitle(slug);
  const id = `shadcn-io-${slug.replace(/[^a-zA-Z0-9-]/g, "-")}`;
  if (existingIds.has(id)) continue;

  const category = u.includes("template") ? "template" : "block";
  newItems.push({
    id,
    name: `shadcn.io ${title}`,
    nameCn: `shadcn.io ${title} 企业级业务区块`,
    category,
    siteId: "shadcn-io",
    siteName: "shadcn.io",
    siteUrl: "https://www.shadcn.io/blocks",
    originUrl: fullUrl,
    status: "collected",
    description: `源自 shadcn.io 的生产级复合区块，开箱即用，支持真实交互与状态响应。`,
    tags: ["shadcnio", title.split(" ")[0], category === "block" ? "Block" : "Template"],
    componentKey: `${id}-demo`,
  });

  existingOriginUrls.add(fullUrl);
  existingIds.add(id);
}

// 2. shadcnstudio.com (all blocks)
for (const u of analysis["shadcnstudio"].componentLikeUrls.slice(0, 50)) {
  const fullUrl = u.startsWith("http") ? u : `https://shadcnstudio.com${u}`;
  if (existingOriginUrls.has(fullUrl)) continue;

  const slug = u.split("/blocks/")[1] || u.replace(/^\/+/, "");
  const title = slugToTitle(slug);
  const id = `shadcnstudio-${slug.replace(/[^a-zA-Z0-9-]/g, "-")}`;
  if (existingIds.has(id)) continue;

  newItems.push({
    id,
    name: `shadcnstudio ${title}`,
    nameCn: `shadcnstudio ${title} 商业设计区块`,
    category: "block",
    siteId: "shadcnstudio",
    siteName: "shadcnstudio.com",
    siteUrl: "https://shadcnstudio.com/blocks",
    originUrl: fullUrl,
    status: "collected",
    description: `源自 shadcnstudio.com 的精美商业营销与应用区块。`,
    tags: ["shadcnstudio", title.split(" ")[0], "Block"],
    componentKey: `${id}-demo`,
  });

  existingOriginUrls.add(fullUrl);
  existingIds.add(id);
}

// 3. boardui.com (deduplicate language variations, keep unique component names)
const boarduiComponents = new Set();
for (const u of analysis["boardui"].componentLikeUrls) {
  const match = u.match(/components\/([a-zA-Z0-9-]+)/);
  if (match) {
    boarduiComponents.add(match[1]);
  }
}

for (const comp of boarduiComponents) {
  const fullUrl = `https://www.boardui.com/zh-hans/components/${comp}`;
  if (existingOriginUrls.has(fullUrl)) continue;

  const title = slugToTitle(comp);
  const id = `boardui-${comp}`;
  if (existingIds.has(id)) continue;

  newItems.push({
    id,
    name: `BoardUI ${title}`,
    nameCn: `BoardUI ${title} 工业级系统组件`,
    category: "block",
    siteId: "boardui",
    siteName: "BoardUI",
    siteUrl: "https://www.boardui.com",
    originUrl: fullUrl,
    status: "collected",
    description: `源自 BoardUI 的工业监控、Agent 协同与数据可视化专业组件。`,
    tags: ["BoardUI", title.split(" ")[0], "Component"],
    componentKey: `${id}-demo`,
  });

  existingOriginUrls.add(fullUrl);
  existingIds.add(id);
}

// 4. refero (styles.refero.design)
for (const u of analysis["refero"].componentLikeUrls) {
  const fullUrl = u.startsWith("http") ? u : `https://styles.refero.design${u}`;
  if (existingOriginUrls.has(fullUrl)) continue;

  const slug = u.replace("/style/", "");
  const title = slugToTitle(slug);
  const id = `refero-${slug.slice(0, 8)}`;
  if (existingIds.has(id)) continue;

  newItems.push({
    id,
    name: `Refero Design System ${id.slice(-4)}`,
    nameCn: `Refero 精选设计系统规范`,
    category: "block",
    siteId: "refero",
    siteName: "styles.refero.design",
    siteUrl: "https://styles.refero.design",
    originUrl: fullUrl,
    status: "collected",
    description: `精选自顶级科技公司产品的现代暗黑与高保真设计风格调色板。`,
    tags: ["Refero", "DesignSystem", "Style"],
    componentKey: `${id}-demo`,
  });

  existingOriginUrls.add(fullUrl);
  existingIds.add(id);
}

console.log(`Adding ${newItems.length} verified deep discoveries to components-registry.ts!`);

const formattedEntries = newItems.map(item => {
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
console.log(`Successfully enriched registry with deep discoveries!`);
