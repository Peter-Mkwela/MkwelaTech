import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Input validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' }, 
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({ 
      where: { email: normalizedEmail } 
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password.' }, 
        { status: 401 }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        { error: 'Invalid email or password.' }, 
        { status: 401 }
      );
    }

    // Compare password with bcryptjs
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password.' }, 
        { status: 401 }
      );
    }

    // Remove password from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...safeUser } = user;

    return NextResponse.json({ 
      message: 'Login successful', 
      user: safeUser 
    });

  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}

// Add other HTTP methods to prevent 405 errors
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' }, 
    { status: 405 }
  );
}