import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Digital Dekho - Global Digital Agency | Web Development, App Development, AI Automation',
  description: 'Leading global digital agency offering web development, app development, AI automation, video editing, photo editing, Meta ads, Google ads, and SEO services worldwide.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </>
  );
}