'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/shared/Button';

export interface ServiceDetail {
  tag: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  overview: string;
  icon: React.ReactNode;
  highlights: { title: string; description: string }[];
  whatWeDeliver: string[];
  benefits: { title: string; description: string }[];
  relatedServices: { title: string; href: string; tag: string }[];
}

interface ServicePageLayoutProps {
  service: ServiceDetail;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0E2A50 100%)' }}
        >
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full uppercase tracking-widest mb-5">
                  {service.tag}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
              >
                {service.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/60 leading-relaxed max-w-2xl mb-10"
              >
                {service.heroDescription}
              </motion.p>

              <motion.div variants={fadeUp}>
                <Button href="/contact" variant="secondary" size="lg">
                  Request a Consultation
                  <ArrowRight size={17} />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                <span className="inline-block text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
                  Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-5 tracking-tight">
                  {service.subtitle}
                </h2>
                <p className="text-gray-500 leading-relaxed text-base mb-10">
                  {service.overview}
                </p>

                <h3 className="text-lg font-bold text-navy-900 mb-5">
                  What We Deliver
                </h3>
                <ul className="flex flex-col gap-3 mb-12">
                  {service.whatWeDeliver.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span
                        className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-bold text-navy-900 mb-6">
                  Key Benefits
                </h3>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.benefits.map((benefit) => (
                    <motion.div
                      key={benefit.title}
                      variants={fadeUp}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-cyan-100 hover:shadow-card transition-all duration-200"
                    >
                      <h4 className="font-bold text-navy-900 text-sm mb-1.5">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-28 flex flex-col gap-6">
                  <div className="bg-navy-900 rounded-2xl p-7 text-white">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center mb-5 text-white">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-base mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      Ready to get started? Speak to one of our specialists today.
                    </p>
                    <Button href="/contact" variant="secondary" size="md" className="w-full justify-center">
                      Get a Consultation
                    </Button>
                  </div>

                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card">
                    <h3 className="font-bold text-navy-900 text-sm uppercase tracking-wider mb-5">
                      Service Highlights
                    </h3>
                    <div className="flex flex-col gap-4">
                      {service.highlights.map((h) => (
                        <div key={h.title} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1.5" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-navy-900">{h.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{h.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {service.relatedServices.length > 0 && (
          <section className="py-16 bg-gray-50/60 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-navy-900 mb-6">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.relatedServices.map((rel) => (
                  <Link
                    key={rel.href}
                    href={rel.href}
                    className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-cyan-200 hover:shadow-card transition-all duration-200"
                  >
                    <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">
                      {rel.tag}
                    </span>
                    <p className="text-sm font-bold text-navy-900 mt-1.5 mb-3 group-hover:text-cyan-600 transition-colors">
                      {rel.title}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-cyan-500 font-medium">
                      Learn More
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
