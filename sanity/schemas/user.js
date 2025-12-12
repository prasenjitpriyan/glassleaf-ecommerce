export const user = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: true, // Hide from Sanity Studio API responses if possible/needed, but definitely in implementation
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'User', value: 'user' },
          { title: 'Admin', value: 'admin' },
        ],
      },
      initialValue: 'user',
    },
    {
      name: 'resetToken',
      title: 'Reset Token',
      type: 'string',
      hidden: true,
    },
    {
      name: 'resetTokenExpiry',
      title: 'Reset Token Expiry',
      type: 'datetime',
      hidden: true,
    },
  ],
};
