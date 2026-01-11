const order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'user',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'user' }],
      description: 'The user who placed the order',
    },
    {
      name: 'customerName',
      title: 'Customer Name (Snapshot)',
      type: 'string',
      description: 'Snapshot of customer name at time of order',
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Order Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
            },
            {
              name: 'variant',
              title: 'Variant',
              type: 'reference',
              to: [{ type: 'variant' }],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
            {
              name: 'price',
              title: 'Price at Purchase',
              type: 'number',
            },
          ],
          preview: {
            select: {
              productName: 'product.name',
              variantName: 'variant.name',
              quantity: 'quantity',
              price: 'price',
            },
            prepare(selection) {
              const { productName, variantName, quantity, price } = selection;
              return {
                title: `${productName} (${variantName || 'Default'})`,
                subtitle: `Qty: ${quantity} | Price: ₹${price}`,
              };
            },
          },
        },
      ],
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'pending',
    },
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'payment',
      title: 'Payment Details',
      type: 'reference',
      to: [{ type: 'payment' }],
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'orderId',
      customer: 'customerName',
      amount: 'totalAmount',
      status: 'status',
    },
    prepare(selection) {
      const { title, customer, amount, status } = selection;
      return {
        title: `Order: ${title || 'N/A'}`,
        subtitle: `${customer} - ₹${amount} [${status?.toUpperCase()}]`,
      };
    },
  },
};

export default order;
