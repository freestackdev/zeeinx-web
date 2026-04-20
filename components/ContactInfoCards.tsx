'use client';

import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const cards = [
  {
    id: 'phone',
    title: 'Call Us',
    value: CONTACT_INFO.phone,
    subtitle: 'Mon–Fri, 9am–6pm GMT',
    icon: <Phone size={22} />,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
    color: 'from-navy-900 to-navy-800',
    iconBg: 'bg-cyan-500',
  },
  {
    id: 'email',
    title: 'Email Us',
    value: CONTACT_INFO.email,
    subtitle: 'Typically respond within 24 hours',
    icon: <Mail size={22} />,
    href: `mailto:${CONTACT_INFO.email}`,
    color: 'from-navy-900 to-navy-800',
    iconBg: 'bg-cyan-500',
  },
  {
    id: 'address',
    title: 'Office Address',
    value: CONTACT_INFO.address,
    subtitle: 'London, United Kingdom',
    icon: <MapPin size={22} />,
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`,
    color: 'from-navy-900 to-navy-800',
    iconBg: 'bg-cyan-500',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ContactInfoCards() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card) => (
        <motion.a
          key={card.id}
          href={card.href}
          target={card.id === 'address' ? '_blank' : undefined}
          rel={card.id === 'address' ? 'noopener noreferrer' : undefined}
          variants={cardVariants}
          className={`bg-gradient-to-br ${card.color} rounded-2xl p-7 text-white group cursor-pointer relative overflow-hidden`}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          aria-label={`${card.title}: ${card.value}`}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl -translate-y-8 translate-x-8"
            style={{ background: '#0EA5E9' }}
            aria-hidden="true"
          />

          <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
            {card.icon}
          </div>

          <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-1.5">
            {card.title}
          </p>
          <p className="text-sm font-semibold text-white leading-snug mb-1">
            {card.value}
          </p>
          <p className="text-xs text-white/40">{card.subtitle}</p>
        </motion.a>
      ))}
    </motion.div>
  );
}
