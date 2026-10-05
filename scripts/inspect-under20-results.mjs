import fs from "fs";

const data = JSON.parse(fs.readFileSync("./scripts/under20-deep-analysis.json", "utf-8"));

console.log("=== EXAMINING DISCOVERIES FOR < 20 SITES ===");
for (const [id, info] of Object.entries(data)) {
  console.log(`\n[${id}] ${info.name}:`);
  console.log(`  Total links: ${info.totalLinksDiscovered}`);
  console.log(`  Component-like URLs: ${info.componentLikeUrls.length}`);
  if (info.componentLikeUrls.length > 0) {
    console.log(`  Sample (first 6):`, info.componentLikeUrls.slice(0, 6));
  }
}
