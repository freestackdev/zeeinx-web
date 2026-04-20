'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Button from '@/components/shared/Button';

function ThemeToggle({ scrolled }: { scrolled: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-150',
        scrolled
          ? 'text-gray-500 hover:text-navy-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10'
          : 'text-white/60 hover:text-white hover:bg-white/10'
      )}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 shadow-sm'
            : 'bg-transparent'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-3 group" aria-label="Zeeinx Home">
            <div className="w-9 h-9 rounded-lg bg-navy-900 dark:bg-navy-700 flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3 4H17L10 16L3 4Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="10" cy="10" r="2" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  'font-bold text-base tracking-tight transition-colors duration-300',
                  isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'
                )}
              >
                Zeeinx
              </span>
              <span
                className={cn(
                  'text-xs font-medium transition-colors duration-300',
                  isScrolled ? 'text-gray-500 dark:text-gray-400' : 'text-white/70'
                )}
              >
                Serialization Consulting
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    isActive(link.href)
                      ? isScrolled
                        ? 'text-navy-900 bg-navy-50 dark:text-white dark:bg-white/10'
                        : 'text-white bg-white/10'
                      : isScrolled
                      ? 'text-gray-600 hover:text-navy-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle scrolled={isScrolled} />
            <Button href="/contact" variant="secondary" size="md">
              Get Consultation
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle scrolled={isScrolled} />
            <button
              className={cn(
                'p-2 rounded-lg transition-colors duration-200',
                isScrolled
                  ? 'text-navy-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                  : 'text-white hover:bg-white/10'
              )}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy-900 dark:bg-navy-950 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="h-20 flex items-center justify-between px-4 sm:px-6 border-b border-white/10">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
                <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 4H17L10 16L3 4Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                    <circle cx="10" cy="10" r="2" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-base text-white tracking-tight">Zeeinx</span>
                  <span className="text-xs text-white/60">Serialization Consulting</span>
                </div>
              </Link>
              <button
                className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-6 flex-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-4 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-lg font-medium transition-colors duration-200"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <Button href="/contact" variant="secondary" size="lg" className="w-full justify-center">
                  Get Consultation
                </Button>
              </motion.div>
            </nav>

            <div className="p-6 border-t border-white/10">
              <p className="text-white/40 text-sm text-center">
                info@zeeinx.com &nbsp;·&nbsp; +44 203 097 1597
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
