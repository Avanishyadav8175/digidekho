import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get leads from localStorage (simulating database)
    if (typeof window !== 'undefined') {
      const leads = JSON.parse(localStorage.getItem('admin-leads') || '[]');
      return NextResponse.json({
        success: true,
        leads,
      });
    }

    // Static leads data for server-side rendering
    const leads = [];

    return NextResponse.json({
      success: true,
      leads,
    });
  } catch (error) {
    console.error('Leads fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, email, phone, message } = data;
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
        { status: 400 }
      );
    }

    // Create new lead object
    const lead = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || '',
      service: data.service || 'General Inquiry',
      budget: data.budget || '',
      timeline: data.timeline || '',
      message: data.message,
      status: 'new',
      priority: 'medium',
      notes: '',
      createdAt: new Date().toISOString(),
      source: 'Contact Form'
    };

    // In a real app, you would save to database here
    // For now, we'll return the lead data so the frontend can save it to localStorage
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 24 hours.',
      lead,
    }, { status: 201 });
  } catch (error) {
    console.error('Lead creation error:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}