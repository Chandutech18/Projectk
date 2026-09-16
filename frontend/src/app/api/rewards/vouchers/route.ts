import { NextResponse } from 'next/server';
import { REWARD_VOUCHERS } from '@/data/mockData';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: REWARD_VOUCHERS,
    count: REWARD_VOUCHERS.length,
    message: 'Reward vouchers retrieved',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { voucherId } = body;

    if (!voucherId) {
      return NextResponse.json(
        { success: false, message: 'voucherId is required' },
        { status: 400 }
      );
    }

    const voucher = REWARD_VOUCHERS.find((v) => v.id === voucherId);
    if (!voucher) {
      return NextResponse.json(
        { success: false, message: 'Voucher not found' },
        { status: 404 }
      );
    }

    const couponCode = 'ROYAL' + Math.floor(1000 + Math.random() * 9000);

    return NextResponse.json({
      success: true,
      message: `Successfully redeemed ${voucher.title}!`,
      couponCode,
      pointsDeducted: voucher.pointsCost,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to redeem voucher' },
      { status: 500 }
    );
  }
}
