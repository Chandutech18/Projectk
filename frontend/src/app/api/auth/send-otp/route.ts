import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone } = body;

    if (!phone || phone.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Valid 10-digit mobile number is required' },
        { status: 400 }
      );
    }

    // In real app, integrate SMS provider (e.g. Twilio / Fast2SMS)
    const mockOtp = '123456';

    return NextResponse.json({
      success: true,
      message: `OTP sent successfully to +91 ${phone}`,
      devOtp: process.env.NODE_ENV === 'development' ? mockOtp : undefined,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}
