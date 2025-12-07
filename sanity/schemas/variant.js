const variant = {
  name: 'variant',
  title: 'Variant',
  type: 'object',
  fields: [
    {
      name: 'size',
      type: 'string',
      title: 'Jar Size',
      options: {
        list: [
          { title: '100g Jar', value: '100g' },
          { title: '250g Jar', value: '250g' },
          { title: '500g Jar', value: '500g' },
        ],
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price (₹)',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
      initialValue: 0,
    },
    {
      name: 'jarDetails',
      type: 'object',
      title: 'Glass Jar Details',
      fields: [
        { name: 'material', type: 'string', initialValue: 'Glass' },
        { name: 'lidType', type: 'string' },
        { name: 'capacity', type: 'string' },
      ],
    },
  ],
};

export default variant;
