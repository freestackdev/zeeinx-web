'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';
import Button from '@/components/shared/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0E2A50 45%, #0F3460 100%)' }}
      aria-label="Hero section"
    >
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />

      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #38BDF8, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={badgeVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
              UK-Based Pharmaceutical Serialization Experts
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Global Serialization &{' '}
            <span className="text-gradient">Compliance Consulting</span>{' '}
            for Life Sciences
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl mb-10"
          >
            Helping pharmaceutical and healthcare companies achieve regulatory compliance,
            system validation, and seamless serialization implementation — from strategy
            to live deployment.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button href="/contact" variant="secondary" size="lg">
              Get a Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#services" variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/10 border-white/20">
              Explore Services
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <a
              href="https://www.cosmotrace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg font-medium text-sm border border-cyan-400/60 text-cyan-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors duration-150 group"
            >
              Visit Our Serialization Website
              <ExternalLink size={14} className="text-cyan-400/70 group-hover:text-cyan-300 transition-colors duration-150" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-8 pt-8 border-t border-white/10"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '20+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/50 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
