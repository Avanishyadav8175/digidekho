import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for admin token (simple check without JWT verification in middleware)
    const token = request.cookies.get('admin-token');
    
    if (!token || !token.value) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Let the token verification happen in the actual page/API route
    // This avoids JWT issues in middleware edge runtime
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};