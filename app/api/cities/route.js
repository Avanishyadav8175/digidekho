import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Static cities data
    const cities = [
      {
        _id: '1',
        name: 'New York',
        slug: 'new-york',
        country: {
          _id: '1',
          name: 'United States',
          slug: 'united-states',
          code: 'US'
        },
        services: ['1', '2'], // Service IDs
        isActive: true
      },
      {
        _id: '2',
        name: 'Mumbai',
        slug: 'mumbai',
        country: {
          _id: '2',
          name: 'India',
          slug: 'india',
          code: 'IN'
        },
        services: ['1', '2'],
        isActive: true
      }
    ];

    return NextResponse.json({
      success: true,
      cities,
    });
  } catch (error) {
    console.error('Cities fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cities' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'City created successfully',
      city: { ...data, _id: Date.now().toString() },
    }, { status: 201 });
  } catch (error) {
    console.error('City creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create city' },
      { status: 500 }
    );
  }
}