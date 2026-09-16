import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || undefined;
    const category = searchParams.get('category') || undefined;
    const q = searchParams.get('q') || undefined;

    const result = await apiClient.realEstate.getAll({ type, category, q });
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/real-estate] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch real estate from backend' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await apiClient.realEstate.create(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/real-estate POST] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to post property' },
      { status: 500 }
    );
  }
}
