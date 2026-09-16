import { NextResponse } from 'next/server';

const mockSubscriptionPlans = [
  { id: 'sub_basic', name: 'Starter Business Plan', price: 499, validity: '1 Month', features: ['Verified Blue Tick', 'Top Search Priority', 'Direct WhatsApp Button'] },
  { id: 'sub_gold', name: 'Gold Growth Plan', price: 1299, validity: '3 Months', features: ['All Starter Features', 'Hero Carousel Feature', 'Push Notifications to Users', '5% Discount on Ad Banners'] },
  { id: 'sub_royal', name: 'Royal Platinum VIP', price: 3999, validity: '1 Year', features: ['All Gold Features', 'Dedicated Account Manager', 'Custom Video Story/Reel Spot', 'Unlimited Deals & Coupons'] },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockSubscriptionPlans,
    count: mockSubscriptionPlans.length,
    message: 'Subscription plans retrieved',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, businessId } = body;

    if (!planId || !businessId) {
      return NextResponse.json(
        { success: false, message: 'planId and businessId are required' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Subscription request initiated',
      subscriptionId: 'sub_active_' + Date.now(),
      status: 'PENDING_PAYMENT',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create subscription' },
      { status: 500 }
    );
  }
}
