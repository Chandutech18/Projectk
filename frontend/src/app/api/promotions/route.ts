import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET() {
  try {
    const result = await apiClient.promotions.getAll();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/promotions] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch promotions from backend' },
      { status: 500 }
    );
  }
}
