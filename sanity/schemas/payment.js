const payment = {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order Reference',
      type: 'reference',
      to: [{ type: 'order' }],
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'INR',
    },
    {
      name: 'status',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Failed', value: 'failed' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
    },
    {
      name: 'method',
      title: 'Payment Method',
      type: 'string',
      description: 'e.g., razorpay, card, upi',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
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
      title: 'transactionId',
      amount: 'amount',
      status: 'status',
    },
    prepare(selection) {
      const { title, amount, status } = selection;
      return {
        title: `Txn: ${title || 'N/A'}`,
        subtitle: `₹${amount} - ${status?.toUpperCase()}`,
      };
    },
  },
};

export default payment;
