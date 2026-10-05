import fs from "fs";

const content = fs.readFileSync("./src/data/components-registry.ts", "utf-8");

// Extract SITES_METADATA ids
const sitesMetadataMatch = content.match(/export const SITES_METADATA:\s*SiteMeta\[\]\s*=\s*\[([\s\S]*?)\];/);
const siteIds = [];
if (sitesMetadataMatch) {
  const ids = [...sitesMetadataMatch[1].matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
  siteIds.push(...ids);
}

// Extract REGISTRY_DATA
const registryDataMatch = content.match(/export const REGISTRY_DATA:\s*RegistryItem\[\]\s*=\s*\[([\s\S]*?)\];/);
const registryContent = registryDataMatch ? registryDataMatch[1] : "";

const siteCounts = {};
for (const id of siteIds) {
  siteCounts[id] = 0;
}

const itemMatches = [...registryContent.matchAll(/siteId:\s*"([^"]+)"/g)].map(m => m[1]);
for (const s of itemMatches) {
  siteCounts[s] = (siteCounts[s] || 0) + 1;
}

console.log("=== CURRENT COLLECTION AUDIT PER SITE ===");
const sorted = Object.entries(siteCounts).sort((a, b) => a[1] - b[1]);
for (const [site, count] of sorted) {
  console.log(`${site.padEnd(20)}: ${count} components collected`);
}
