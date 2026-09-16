import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    // Webhook event processing logic
    console.log('[Payment Webhook Received]', { payloadLength: payload.length, signature });

    return NextResponse.json({
      received: true,
      status: 'PROCESSED',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Webhook handler error' },
      { status: 400 }
    );
  }
}
