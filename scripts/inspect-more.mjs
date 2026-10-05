async function inspect(name, url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(6000) });
    const text = await res.text();
    const regex = /href=["']([^"']+)["']/g;
    const links = [];
    let m;
    while ((m = regex.exec(text)) !== null) {
      links.push(m[1]);
    }
    const hRegex = /<h[23][^>]*>(.*?)<\/h[23]>/gi;
    const titles = [];
    while ((m = hRegex.exec(text)) !== null) {
      titles.push(m[1].replace(/<[^>]+>/g, '').trim());
    }
    console.log('=== ' + name + ' ===');
    console.log('Titles:', titles.slice(0, 15));
    const internalLinks = [...new Set(links)].filter(l => l.startsWith('/'));
    console.log('Internal Links:', internalLinks.slice(0, 20));
  } catch(e) {
    console.log(name, 'ERR:', e.message);
  }
}

async function testAll() {
  await inspect('motion-primitives', 'https://motion-primitives.com/docs/text-effect');
  await inspect('kokonut', 'https://kokonutui.com/docs/components');
  await inspect('animate-ui', 'https://animate-ui.com/docs/components');
  await inspect('origin-ui', 'https://coss.com/ui/docs/components/accordion');
  await inspect('skiper', 'https://skiper-ui.com/docs/components');
  await inspect('tailark', 'https://tailark.com/blocks');
  await inspect('velora', 'https://veloraui.vercel.app');
}
testAll();
