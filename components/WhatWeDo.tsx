'use client';

import { motion, type Variants } from 'framer-motion';
import { Target, Globe, LifeBuoy } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { CAPABILITIES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={24} />,
  Globe: <Globe size={24} />,
  LifeBuoy: <LifeBuoy size={24} />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhatWeDo() {
  return (
    <SectionWrapper id="what-we-do">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-block text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-6 leading-tight">
            Serialization Expertise,{' '}
            <span className="text-navy-600">End to End</span>
          </h2>
          <p className="text-gray-500 leading-relaxed text-base mb-8">
            Zeeinx delivers specialized serialization consulting to pharmaceutical and
            healthcare companies worldwide. We combine deep regulatory knowledge with
            hands-on technical capability to guide organizations through every stage
            of their compliance journey — from initial strategy through to live
            operational support.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-200 to-transparent" />
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider whitespace-nowrap">
              Core Capabilities
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-200 to-transparent" />
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              variants={itemVariants}
              className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover hover:border-cyan-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                {iconMap[cap.icon]}
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1.5 text-base">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
