import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, description, customerPhone } = body;
    const result = await apiClient.payments.createOrder(amount, description, customerPhone);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/payments/create] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
