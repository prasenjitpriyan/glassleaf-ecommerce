import { client } from '@/lib/sanity.client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { message: 'Token and new password are required' },
        { status: 400 }
      );
    }

    // Find user with this token and ensure it hasn't expired
    const user = await client.fetch(
      `*[_type == "user" && resetToken == $token][0]`,
      { token }
    );

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid or expired token' },
        { status: 400 }
      );
    }

    const now = new Date();
    const expiry = new Date(user.resetTokenExpiry);

    if (now > expiry) {
      return NextResponse.json(
        { message: 'Token has expired' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await adminClient
      .patch(user._id)
      .set({
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      })
      .commit();

    return NextResponse.json(
      { message: 'Password reset successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in reset-password:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
