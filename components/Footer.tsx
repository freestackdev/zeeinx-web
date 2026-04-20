import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';

const FOOTER_SERVICES = [
  { label: 'Serialization Consulting', href: '/services/serialization-consulting' },
  { label: 'EU Hub Compliance (EMVO)', href: '/services/eu-hub-compliance' },
  { label: 'EU FMD Implementation', href: '/services/eu-fmd-implementation' },
  { label: 'L4 System Validation', href: '/services/l4-system-validation' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-5" aria-label="Zeeinx Home">
              <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 4H17L10 16L3 4Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                  <circle cx="10" cy="10" r="2" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base text-white tracking-tight">Zeeinx</span>
                <span className="text-xs text-white/50">Serialization Consulting</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              UK-based global serialization and compliance consulting for life sciences and pharmaceutical companies.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Zeeinx on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Zeeinx on Twitter"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-cyan-400" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-cyan-400" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} Zeeinx Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
