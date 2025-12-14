import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas/index.js';

import { theme } from './theme';

export default defineConfig({
  name: 'glassleaf',
  title: 'GlassLeaf Tea CMS',
  theme,

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
            ...S.documentTypeListItems(),
          ]),
    }),

    visionTool(),
  ],

  schema: { types: schemaTypes },
});
