'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
  animate?: boolean;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function SectionWrapper({
  children,
  className,
  id,
  innerClassName,
  animate = true,
}: SectionWrapperProps) {
  if (animate) {
    return (
      <section id={id} className={cn('py-20 lg:py-28', className)}>
        <motion.div
          className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', innerClassName)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <section id={id} className={cn('py-20 lg:py-28', className)}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', innerClassName)}>
        {children}
      </div>
    </section>
  );
}
