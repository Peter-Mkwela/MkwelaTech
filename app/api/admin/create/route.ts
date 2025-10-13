import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { UserRole, Prisma } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, password, confirmPassword, secretKey } = body;

    // Secret key check
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized. Invalid secret key.' },
        { status: 401 }
      );
    }

    // Validate required fields
    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'Email and password fields are required.' },
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

    // Create Admin user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone: phone ?? null,
        password: hashedPassword,
        role: UserRole.ADMIN,
      } as Prisma.UserCreateInput,
    });

    return NextResponse.json({
      message: 'Admin user created successfully',
      userId: newUser.id,
    });
  } catch (err) {
    console.error('Admin creation error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
