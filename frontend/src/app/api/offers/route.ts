import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET() {
  try {
    const result = await apiClient.offers.getAll();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/offers] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch offers from backend' },
      { status: 500 }
    );
  }
}
