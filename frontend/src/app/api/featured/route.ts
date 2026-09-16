import { NextResponse } from 'next/server';
import { FEATURED_BUSINESSES } from '@/data/mockData';

export async function GET() {
  const featured = FEATURED_BUSINESSES.filter((b) => b.isVerified);

  return NextResponse.json({
    success: true,
    data: featured,
    count: featured.length,
    message: 'Featured businesses retrieved successfully',
  });
}
