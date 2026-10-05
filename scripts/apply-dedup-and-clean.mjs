import fs from 'fs';

async function main() {
  const regPath = './src/data/components-registry.ts';
  const regMod = await import('../src/data/components-registry.ts');
  const items = [...regMod.REGISTRY_DATA];
  const sites = [...regMod.SITES_METADATA];

  const officialShadcnSlugs = [
    'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'attachment', 'avatar',
    'badge', 'breadcrumb', 'bubble', 'button', 'button-group', 'calendar',
    'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox',
    'command', 'context-menu', 'data-table', 'date-picker', 'dialog', 'direction',
    'drawer', 'dropdown-menu', 'empty', 'field', 'hover-card', 'input',
    'input-group', 'input-otp', 'item', 'kbd', 'label', 'marker',
    'menubar', 'message', 'message-scroller', 'native-select', 'navigation-menu', 'pagination',
    'popover', 'progress', 'questionnaire', 'radio-group', 'resizable', 'scroll-area',
    'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider',
    'sonner', 'spinner', 'switch', 'table', 'tabs', 'textarea',
    'toast', 'toggle', 'toggle-group', 'tooltip'
  ];

  const filteredItems = [];

  for (const item of items) {
    // 1. shadcn
    if (item.siteId === 'shadcn') {
      if (!item.id.startsWith('shadcn-base-') && !item.id.startsWith('shadcn-radix-')) {
        filteredItems.push(item);
        continue;
      }
      if (item.id.startsWith('shadcn-radix-')) {
        const slug = item.originUrl.split('/').pop();
        const inOrig13 = ['button', 'data-table', 'dialog', 'calendar', 'command', 'tabs', 'carousel', 'sheet', 'combobox', 'drawer', 'toggle-group', 'alert-dialog', 'aspect-ratio'].includes(slug);
        if (!inOrig13 && officialShadcnSlugs.includes(slug)) {
          filteredItems.push({
            ...item,
            id: `shadcn-${slug}`,
            originUrl: `https://ui.shadcn.com/docs/components/${slug}`,
            componentKey: `shadcn-${slug}-demo`
          });
        }
      }
      continue;
    }

    // 2. animate-ui
    if (item.siteId === 'animate-ui') {
      if (item.originUrl === 'https://animate-ui.com/docs/components' || item.originUrl === 'https://animate-ui.com/docs/components/community') {
        continue;
      }
      if (item.id.startsWith('animate-ui-base-')) {
        const baseSlug = item.originUrl.split('/').pop();
        const hasRadix = items.some(x => x.siteId === 'animate-ui' && x.id === `animate-ui-radix-${baseSlug}`);
        if (hasRadix) continue;
      }
      if (item.id.startsWith('animate-ui-headless-')) continue;
      if (item.id === 'animate-ui-tabs' || item.id === 'animate-ui-tooltip') continue;
      filteredItems.push(item);
      continue;
    }

    // 3. boardui
    if (item.siteId === 'boardui') {
      if (item.originUrl === 'https://www.boardui.com/zh-hans/components' || item.id === 'boardui-pro-installation') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 4. heroui
    if (item.siteId === 'heroui') {
      if (item.originUrl === 'https://heroui.pro/docs/react/components') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 5. shadcnstudio
    if (item.siteId === 'shadcnstudio') {
      if (item.originUrl === 'https://shadcnstudio.com/blocks') continue;
      const isOldBlock = item.originUrl.match(/^https:\/\/shadcnstudio\.com\/blocks\/[a-zA-Z0-9-]+$/);
      if (isOldBlock) continue;
      filteredItems.push(item);
      continue;
    }

    // 6. origin-ui
    if (item.siteId === 'origin-ui') {
      if (item.originUrl === 'https://originui.com/inputs' ||
          item.originUrl === 'https://originui.com/switches' ||
          item.originUrl === 'https://originui.com/sliders' ||
          item.originUrl.includes('coss.com')) {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 7. veloraui
    if (item.siteId === 'veloraui') {
      if (item.originUrl.includes('veloraui.vercel.app')) {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 8. rareui
    if (item.siteId === 'rareui') {
      if (item.originUrl === 'https://www.rareui.com/components') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 9. transitions
    if (item.siteId === 'transitions') {
      if (item.originUrl === 'https://transitions.dev/library.html') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 10. beautifului
    if (item.siteId === 'beautifului') {
      if (item.originUrl === 'https://www.beautifului.dev') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 11. tailark
    if (item.siteId === 'tailark') {
      if (item.originUrl === 'https://tailark.com/blocks') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 12. skiper
    if (item.siteId === 'skiper') {
      if (item.originUrl === 'https://skiper-ui.com/components') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 13. kokonut
    if (item.siteId === 'kokonut') {
      if (item.originUrl === 'https://kokonutui.com') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 14. shadcnspace URL fixes
    if (item.siteId === 'shadcnspace') {
      if (item.id === 'shadcnspace-dashboard') {
        filteredItems.push({
          ...item,
          originUrl: 'https://shadcnspace.com/blocks/dashboard-ui/dashboard-shell'
        });
        continue;
      }
      if (item.id === 'shadcnspace-marketing') {
        filteredItems.push({
          ...item,
          originUrl: 'https://shadcnspace.com/blocks/marketing/hero-section'
        });
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 15. beui duplicate removals
    if (item.siteId === 'beui') {
      if (item.id === 'beui-upload' || item.id === 'beui-typewriter') {
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    // 16. 21st URL fix
    if (item.siteId === '21st' && item.id === '21st-glass-portfolio') {
      filteredItems.push({
        ...item,
        originUrl: 'https://21st.dev/community/templates/portfolio'
      });
      continue;
    }

    // 17. refero URL fix
    if (item.siteId === 'refero' && item.id === 'refero-geist') {
      filteredItems.push({
        ...item,
        originUrl: 'https://styles.refero.design/style/geist'
      });
      continue;
    }

    // 18. shadcnstore URL fixes
    if (item.siteId === 'shadcnstore') {
      const storeMap = {
        'shadcnstore-pricing': 'https://shadcnstore.com/blocks/marketing/pricing',
        'shadcnstore-hero': 'https://shadcnstore.com/blocks/marketing/hero-sections',
        'shadcnstore-checkout-summary': 'https://shadcnstore.com/blocks/e-commerce/checkout-forms',
        'shadcnstore-saas-onboarding': 'https://shadcnstore.com/blocks/application/app-shells',
        'shadcnstore-marketing': 'https://shadcnstore.com/blocks/marketing/features',
        'shadcnstore-e-commerce': 'https://shadcnstore.com/blocks/e-commerce/product-overview',
        'shadcnstore-navbars': 'https://shadcnstore.com/blocks/marketing/navbars',
        'shadcnstore-storefront-hero': 'https://shadcnstore.com/blocks/e-commerce/storefront-hero',
        'shadcnstore-product-cards': 'https://shadcnstore.com/blocks/e-commerce/product-list',
        'shadcnstore-cart-flyout': 'https://shadcnstore.com/blocks/e-commerce/shopping-carts',
        'shadcnstore-checkout-form': 'https://shadcnstore.com/blocks/e-commerce/category-filters',
        'shadcnstore-order-confirmation': 'https://shadcnstore.com/blocks/e-commerce/order-history',
        'shadcnstore-saas-pricing-matrix': 'https://shadcnstore.com/blocks/marketing/comparison',
        'shadcnstore-feature-bento': 'https://shadcnstore.com/blocks/marketing/bento-grids',
        'shadcnstore-testimonial-carousel': 'https://shadcnstore.com/blocks/marketing/testimonials',
        'shadcnstore-faq-accordion': 'https://shadcnstore.com/blocks/marketing/faqs',
        'shadcnstore-team-showcase': 'https://shadcnstore.com/blocks/marketing/teams',
        'shadcnstore-blog-grid': 'https://shadcnstore.com/blocks/marketing/blogs',
        'shadcnstore-contact-section': 'https://shadcnstore.com/blocks/marketing/contact',
        'shadcnstore-stats-banner': 'https://shadcnstore.com/blocks/marketing/statistics',
      };
      if (storeMap[item.id]) {
        filteredItems.push({
          ...item,
          originUrl: storeMap[item.id]
        });
        continue;
      }
      filteredItems.push(item);
      continue;
    }

    filteredItems.push(item);
  }

  // Count items per site
  const siteCounts = {};
  for (const item of filteredItems) {
    siteCounts[item.siteId] = (siteCounts[item.siteId] || 0) + 1;
  }

  // Update SITES_METADATA itemsCount
  const updatedSites = sites.map(s => {
    return {
      ...s,
      itemsCount: siteCounts[s.id] || 0
    };
  });

  console.log(`Writing ${filteredItems.length} cleaned items and ${updatedSites.length} updated site metadata to ${regPath}...`);

  const fileContent = `export type ResourceCategory = "component" | "block" | "template";
export type CollectionStatus = "collected" | "pending";

export interface RegistryItem {
  id: string;
  name: string;
  nameCn: string;
  category: ResourceCategory;
  siteId: string;
  siteName: string;
  siteUrl: string;
  originUrl: string;
  status: CollectionStatus;
  description: string;
  tags: string[];
  componentKey: string;
}

export interface SiteMetadata {
  id: string;
  name: string;
  url: string;
  category: "core" | "motion" | "system" | "community";
  badge: string;
  desc: string;
  itemsCount: number;
}

export const SITES_METADATA: SiteMetadata[] = ${JSON.stringify(updatedSites, null, 2)};

export const REGISTRY_DATA: RegistryItem[] = ${JSON.stringify(filteredItems, null, 2)};
`;

  fs.writeFileSync(regPath, fileContent, 'utf8');
  console.log('Successfully written src/data/components-registry.ts!');
}

main();
