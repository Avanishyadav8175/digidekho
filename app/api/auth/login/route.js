import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Simple hardcoded authentication for now
    const validEmail = process.env.ADMIN_EMAIL || 'admin@digitaldekho.com';
    const validPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (email !== validEmail || password !== validPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        adminId: '1',
        email: email,
        role: 'admin' 
      },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: '7d' }
    );

    // Create response
    const response = NextResponse.json({
      success: true,
      admin: {
        id: '1',
        name: 'Admin User',
        email: email,
        role: 'admin',
      },
    });

    // Set HTTP-only cookie
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}