import { adminClient } from '@/lib/sanity.admin';
import { client } from '@/lib/sanity.client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Read check can use public client
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Write must use adminClient
    const newUser = await adminClient.create({
      _type: 'user',
      name,
      email,
      password: hashedPassword,
      role: 'user',
    });

    return NextResponse.json(
      { message: 'User created successfully', user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in sign-up:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
