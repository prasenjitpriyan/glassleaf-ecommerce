const product = {
  name: 'product',
  title: 'Tea Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tea Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Full Description',
    },
    {
      name: 'origin',
      type: 'string',
      title: 'Tea Origin',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{ type: 'string' }],
    },
    {
      name: 'variants',
      title: 'Variants (Glass Jars)',
      type: 'array',
      of: [{ type: 'variant' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
  ],
};

export default product;
