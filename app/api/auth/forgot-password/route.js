import { adminClient } from '@/lib/sanity.admin';
import { client } from '@/lib/sanity.client';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const user = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (!user) {
      // For security, do not reveal if user does not exist
      return NextResponse.json(
        { message: 'If the email exists, a reset link has been sent.' },
        { status: 200 }
      );
    }

    const resetToken = uuidv4();
    const resetTokenExpiry = new Date(Date.now() + 3600000).toISOString(); // 1 hour from now

    await adminClient
      .patch(user._id)
      .set({
        resetToken,
        resetTokenExpiry,
      })
      .commit();

    // MOCK EMAIL SENDING
    console.log(`
      ---------------------------------------
      [MOCK EMAIL] Password Reset Request
      To: ${email}
      Token: ${resetToken}
      Link: ${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}
      ---------------------------------------
    `);

    return NextResponse.json(
      { message: 'If the email exists, a reset link has been sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in forgot-password:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
