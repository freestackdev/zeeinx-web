'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '@/components/shared/Button';
import { CONTACT_INFO } from '@/lib/constants';

export default function CTASection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0E2D55 100%)' }}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            Ready to Get Started?
          </span>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            Get Expert Serialization Support
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Our consultants are ready to assess your requirements and deliver a
            tailored compliance roadmap for your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 group w-full sm:w-auto justify-center"
              aria-label={`Call us at ${CONTACT_INFO.phone}`}
            >
              <Phone size={18} className="text-cyan-400 shrink-0" aria-hidden="true" />
              <div className="text-left">
                <p className="text-xs text-white/50 leading-none mb-0.5">Call Us</p>
                <p className="text-sm font-semibold text-white">{CONTACT_INFO.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 group w-full sm:w-auto justify-center"
              aria-label={`Email us at ${CONTACT_INFO.email}`}
            >
              <Mail size={18} className="text-cyan-400 shrink-0" aria-hidden="true" />
              <div className="text-left">
                <p className="text-xs text-white/50 leading-none mb-0.5">Email Us</p>
                <p className="text-sm font-semibold text-white">{CONTACT_INFO.email}</p>
              </div>
            </a>
          </div>

          <Button href="/contact" variant="secondary" size="lg">
            Request a Consultation
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
