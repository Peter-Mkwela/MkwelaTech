import { prisma } from '../../lib/prisma'

export default async function handler(req, res) {
  try {
    console.log('Testing database connection...');
    
    // Test 1: Simple query
    const result = await prisma.$queryRaw`SELECT NOW() as current_time`;
    console.log('Query successful:', result);
    
    // Test 2: Check if we can access any table
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    console.log('Available tables:', tables);
    
    res.status(200).json({
      success: true,
      database: 'Connected successfully',
      currentTime: result[0].current_time,
      tables: tables,
      environment: process.env.NODE_ENV
    });
    
  } catch (error) {
    console.error('Database connection failed:', error);
    
    res.status(500).json({
      success: false,
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      databaseUrl: process.env.DATABASE_URL ? 
        process.env.DATABASE_URL.replace(/:[^:]*@/, ':****@') : 'Missing',
      nodeEnv: process.env.NODE_ENV
    });
  }
}