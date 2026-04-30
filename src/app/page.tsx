import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutTeaser from '@/components/AboutTeaser';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CtaStrip from '@/components/CtaStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Categories />
      <FeaturedProducts />
      <AboutTeaser />
      <Process />
      <Stats />
      <Testimonials />
      <CtaStrip />
    </>
  );
}
