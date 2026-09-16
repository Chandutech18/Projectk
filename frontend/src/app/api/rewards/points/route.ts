import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET() {
  try {
    const result = await apiClient.rewards.getPoints();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/rewards/points] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch reward points from backend' },
      { status: 500 }
    );
  }
}
