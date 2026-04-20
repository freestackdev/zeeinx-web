import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import WhatWeDo from '@/components/WhatWeDo';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'ZeeInx | Serialization Consulting — Global Pharma Compliance',
  description:
    'UK-based global serialization and compliance consulting for life sciences. Experts in EU FMD, EMVO, L4 system validation, and end-to-end serialization implementation.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <WhatWeDo />
        <Services />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
