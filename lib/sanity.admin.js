import { createClient } from '@sanity/client';

export const adminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-05-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Required for write operations
});
