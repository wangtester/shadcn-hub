import fs from 'fs';
import path from 'path';

const siteIds = [
  'shadcn', 'magicui', 'aceternity', 'boardui', 'shadcnstore', 'refero', 'heroui',
  'shadcnspace', 'beui', 'rareui', 'transitions', 'beautifului',
  '21st', 'shadcnblocks', 'shadcn-io', 'tailark', 'veloraui', 'motion-primitives',
  'skiper', 'eldora', 'kibo', 'kokonut', 'animate-ui', 'origin-ui', 'reui',
  'mynaui', 'shadcn-charts', 'shadcnstudio'
];

for (const id of siteIds) {
  const dir = path.join('src/app/sites', id);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const pageFile = path.join(dir, 'page.tsx');
  const content = `"use client";

import { SitePageTemplate } from "@/components/site-page-template";

export default function SitePage() {
  return <SitePageTemplate siteId="${id}" />;
}
`;
  fs.writeFileSync(pageFile, content, 'utf8');
  console.log(`Updated ${pageFile}`);
}
