const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

async function testWrite() {
  // Manual env loading
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach((line) => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim();
        if (key && !process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }

  console.log('Checking SANITY_API_TOKEN...');
  if (!process.env.SANITY_API_TOKEN) {
    console.error(
      'ERROR: SANITY_API_TOKEN is missing from environment variables.'
    );
    return;
  }

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-05-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  });

  try {
    console.log('Attempting to create a test document...');
    const doc = await client.create({
      _type: 'test_write_permission',
      name: 'Test',
    });
    console.log('Success! Document created:', doc._id);
    await client.delete(doc._id);
    console.log('Cleaned up test document.');
  } catch (error) {
    console.error('FAILED to write to Sanity:');
    console.error(error.message);
    if (error.response && error.response.body) {
      console.error(
        'Response body:',
        JSON.stringify(error.response.body, null, 2)
      );
    }
  }
}

testWrite();
