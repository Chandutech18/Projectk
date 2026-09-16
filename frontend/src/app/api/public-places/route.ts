import { NextResponse } from 'next/server';

const mockPublicPlaces = [
  { id: 'pp1', name: 'Korutla Tower Clock Circle', category: 'Landmark', location: 'Center Town, Korutla', description: 'Historic central landmark and bustling gathering spot of Korutla town.', timing: '24 Hours' },
  { id: 'pp2', name: 'Sri Venkateshwara Swamy Temple', category: 'Temple', location: 'Temple Street, Korutla', description: 'Famous ancient temple known for spiritual peace and festival celebrations.', timing: '6:00 AM - 8:30 PM' },
  { id: 'pp3', name: 'Korutla Municipal Park', category: 'Park', location: 'Near Bus Stand, Korutla', description: 'Green community park with walking track and children play area.', timing: '5:00 AM - 8:00 PM' },
  { id: 'pp4', name: 'Korutla RTC Bus Depot & Station', category: 'Transport', location: 'Main Highway Road', description: 'Primary bus hub connecting Korutla to Hyderabad, Nizamabad, and Jagtial.', timing: '24 Hours' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let list = mockPublicPlaces;

  if (category) {
    list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  return NextResponse.json({
    success: true,
    data: list,
    count: list.length,
    message: 'Public places and landmarks retrieved successfully',
  });
}
