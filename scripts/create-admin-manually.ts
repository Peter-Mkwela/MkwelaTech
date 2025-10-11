// scripts/create-admin-manually.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    console.log("🔧 Creating admin user manually...");
    
    const password = await bcrypt.hash("pmkwela@2001!", 10);
    console.log("✅ Password hashed");

    const admin = await prisma.user.create({
      data: {
        name: "pmkwela",
        email: "petermkwela6@gmail.com",
        password: password,
        role: "ADMIN",
      },
    });

    console.log("🎉 Admin user created successfully:");
    console.log("   Email:", admin.email);
    console.log("   Role:", admin.role);
    console.log("   ID:", admin.id);
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("❌ Error creating admin:", error);
    if (error.code === 'P2002') {
      console.log("   User already exists with this email");
    }
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();