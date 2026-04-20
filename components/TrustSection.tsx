'use client';

import { motion, type Variants } from 'framer-motion';
import { MapPin, FlaskConical, Layers, CircleCheck as CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { TRUST_POINTS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={22} />,
  FlaskConical: <FlaskConical size={22} />,
  Layers: <Layers size={22} />,
  CheckCircle2: <CheckCircle2 size={22} />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TrustSection() {
  return (
    <SectionWrapper className="bg-gray-50/60" id="why-zeeinx">
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
          Why Zeeinx
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
          Built for Pharmaceutical Excellence
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
          We bring together regulatory expertise, technical depth, and real-world
          implementation experience to deliver compliance outcomes that last.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {TRUST_POINTS.map((point, index) => (
          <motion.div
            key={point.id}
            variants={cardVariants}
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-5 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
              {iconMap[point.icon]}
            </div>
            <h3 className="font-bold text-navy-900 mb-2 text-base leading-snug">
              {point.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {point.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
