'use client';

import { motion, type Variants } from 'framer-motion';
import { Cpu, Network, ShieldCheck, FileCheck } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCard from '@/components/shared/ServiceCard';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={22} />,
  Network: <Network size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  FileCheck: <FileCheck size={22} />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <SectionWrapper className="bg-gray-50/60" id="services" animate={false}>
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
          Comprehensive Serialization Solutions
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
          From regulatory strategy to technical implementation, our service portfolio
          covers every aspect of pharmaceutical serialization compliance.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={cardVariants}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
              tag={service.tag}
              href={service.href}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
