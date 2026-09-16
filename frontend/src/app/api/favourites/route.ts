import { NextResponse } from 'next/server';

const mockFavourites: string[] = ['b1', 'b2', 'b5'];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockFavourites,
    count: mockFavourites.length,
    message: 'Saved favourite listings retrieved',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { listingId } = body;

    if (!listingId) {
      return NextResponse.json(
        { success: false, message: 'listingId is required' },
        { status: 400 }
      );
    }

    if (!mockFavourites.includes(listingId)) {
      mockFavourites.push(listingId);
    }

    return NextResponse.json({
      success: true,
      message: 'Listing added to favourites',
      data: mockFavourites,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to update favourites' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const listingId = searchParams.get('listingId');

    if (!listingId) {
      return NextResponse.json(
        { success: false, message: 'listingId query param is required' },
        { status: 400 }
      );
    }

    const index = mockFavourites.indexOf(listingId);
    if (index > -1) {
      mockFavourites.splice(index, 1);
    }

    return NextResponse.json({
      success: true,
      message: 'Listing removed from favourites',
      data: mockFavourites,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to remove favourite' },
      { status: 500 }
    );
  }
}
