import fs from "fs";

const reg = fs.readFileSync("./src/data/components-registry.ts", "utf-8");
const beuiBlocks = [...reg.matchAll(/siteId:\s*"beui"[\s\S]*?originUrl:\s*"([^"]+)"/g)].map(m => m[1]);

console.log(`Currently registered beui originUrls (${beuiBlocks.length}):`);
for (const u of beuiBlocks) console.log("  ", u);
