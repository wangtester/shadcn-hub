import fs from 'fs';

async function crawlShadcnIo() {
  try {
    const res = await fetch('https://www.shadcn.io/blocks', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const text = await res.text();
    const regex = /href=["'](\/blocks\/[^"'#?]+)["']/g;
    const links = [];
    let m;
    while ((m = regex.exec(text)) !== null) {
      links.push(m[1]);
    }
    const unique = [...new Set(links)];
    console.log('Total block links found on page:', unique.length);

    // Also look for categories or headings
    const catRegex = /href=["'](\/blocks\?[^"'#]+)["']/g;
    const catLinks = [];
    while ((m = catRegex.exec(text)) !== null) {
      catLinks.push(m[1]);
    }
    console.log('Categories / query links:', [...new Set(catLinks)]);

    // Extract blocks list
    fs.writeFileSync('scripts/shadcn-io-blocks.json', JSON.stringify({
      blocks: unique,
      categories: [...new Set(catLinks)]
    }, null, 2));

    console.log('Sample blocks:', unique.slice(0, 40));
  } catch (e) {
    console.error('Error fetching shadcn.io:', e.message);
  }
}

crawlShadcnIo();
