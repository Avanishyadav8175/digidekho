'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  // Check if current path is admin route
  const isAdminRoute = pathname?.startsWith('/admin');
  
  // For admin routes, return children without header/footer
  if (isAdminRoute) {
    return <>{children}</>;
  }
  
  // For regular routes, return with header/footer
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}