import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas/index.js';

import AnimatedLogo from '../app/(website)/(components)/animated-logo';
import { theme } from './theme';

// Custom Logo Component
const StudioLogo = (props) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <AnimatedLogo className="w-10 h-10" />
    <span style={{ fontWeight: 'bold', color: 'inherit' }}>{props.title}</span>
  </div>
);

export default defineConfig({
  name: 'glassleaf',
  title: 'GlassLeaf Tea CMS',
  theme,
  studio: {
    components: {
      logo: StudioLogo,
    },
  },

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-05-01',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('GlassLeaf Content')
          .items([
            // PRODUCTS
            S.listItem()
              .title('Products')
              .icon(() => '🍃')
              .child(
                S.documentTypeList('product')
                  .title('All Products')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
              ),

            // CATEGORIES
            S.listItem()
              .title('Categories')
              .icon(() => '🏷️')
              .child(S.documentTypeList('category')),

            // VARIANTS
            S.listItem()
              .title('Variants')
              .icon(() => '📦')
              .child(S.documentTypeList('variant')),

            S.divider(),

            // FEATURED ITEMS
            S.listItem()
              .title('Featured Products')
              .icon(() => '⭐')
              .child(
                S.documentList()
                  .title('Featured Products')
                  .filter('_type == "product" && isFeatured == true')
              ),

            // DOCUMENTS (fallback)
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'product',
                  'category',
                  'variant',
                  'order',
                  'payment',
                  'media.tag',
                ].includes(listItem.getId())
            ),

            S.divider(),

            // ORDERS
            S.listItem()
              .title('Orders')
              .icon(() => '🛍️')
              .child(S.documentTypeList('order').title('All Orders')),

            // PAYMENTS
            S.listItem()
              .title('Payments')
              .icon(() => '💳')
              .child(S.documentTypeList('payment').title('All Payments')),
          ]),
    }),

    visionTool(),
  ],

  schema: { types: schemaTypes },
});
