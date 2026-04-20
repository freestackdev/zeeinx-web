'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
  href?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  tag,
  href,
  className,
}: ServiceCardProps) {
  const card = (
    <motion.div
      className={cn(
        'relative bg-white rounded-2xl p-8 border border-gray-100',
        'shadow-card group h-full',
        href ? 'cursor-pointer' : 'cursor-default',
        className
      )}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 48px rgba(11, 31, 58, 0.14)',
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      {tag && (
        <span className="inline-block text-xs font-semibold text-cyan-500 bg-cyan-50 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
          {tag}
        </span>
      )}
      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {href && (
        <div className="flex items-center gap-1.5 mt-5 text-xs font-semibold text-cyan-500 group-hover:text-cyan-600 transition-colors">
          Learn More
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{card}</Link>;
  }

  return card;
}
