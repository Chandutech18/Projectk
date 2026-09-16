import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId') || undefined;
    const result = await apiClient.reviews.getAll(businessId);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/reviews] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch reviews from backend' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await apiClient.reviews.create(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/reviews POST] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit review' },
      { status: 500 }
    );
  }
}
