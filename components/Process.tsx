'use client';

import { motion, type Variants } from 'framer-motion';
import { Search, Map, Wrench, Headphones } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { PROCESS_STEPS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={20} />,
  Map: <Map size={20} />,
  Wrench: <Wrench size={20} />,
  HeadphonesIcon: <Headphones size={20} />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

export default function Process() {
  return (
    <SectionWrapper id="process" animate={false}>
      <div className="text-center mb-16">
        <span className="inline-block text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
          How It Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
          Our Proven Delivery Process
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
          A structured, four-stage methodology that consistently delivers regulatory
          compliance outcomes on time and within scope.
        </p>
      </div>

      <div className="relative">
        <div
          className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, #0EA5E9 20%, #0EA5E9 80%, transparent)',
            opacity: 0.3,
          }}
          aria-hidden="true"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center lg:items-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-navy-900 flex items-center justify-center text-white shadow-navy relative z-10">
                  {iconMap[step.icon]}
                </div>
                <div
                  className="absolute -inset-1 rounded-2xl opacity-20 blur-sm"
                  style={{ background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)' }}
                  aria-hidden="true"
                />
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-cyan-400 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-cyan"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-56">
                {step.description}
              </p>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="lg:hidden w-px h-8 bg-gradient-to-b from-cyan-300 to-transparent mt-6" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
