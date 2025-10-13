// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { UserRole, Prisma } from '@prisma/client'; // ✅ Use Prisma namespace for types

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, password, confirmPassword, agreeToTerms } = body;

    // Validate required fields
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'All required fields must be filled.' },
        { status: 400 }
      );
    }

    // Password match check
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match.' },
        { status: 400 }
      );
    }

    // Terms agreement check
    if (!agreeToTerms) {
      return NextResponse.json(
        { error: 'You must agree to the Terms and Privacy Policy.' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email is already registered.' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone: phone ?? null, // optional
        password: hashedPassword,
        role: UserRole.CLIENT, // enum
      } as Prisma.UserCreateInput, // ✅ Type-safe cast
    });

    return NextResponse.json({
      message: 'User registered successfully',
      userId: newUser.id,
    });
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
