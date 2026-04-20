import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

function metadataBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  if (process.env.VERCEL_URL) return new URL(`https://${process.env.VERCEL_URL}`);
  return new URL('http://localhost:3000');
}

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: 'ZeeInx | Serialization Consulting',
  description:
    'UK-based global serialization and compliance consulting for life sciences. Helping pharmaceutical and healthcare companies achieve regulatory compliance, system validation, and seamless serialization implementation.',
  keywords: [
    'serialization consulting',
    'pharmaceutical compliance',
    'EU FMD',
    'EMVO',
    'EU Hub',
    'L4 system validation',
    'pharma serialization',
    'life sciences consulting',
    'ZeeInx',
  ],
  authors: [{ name: 'ZeeInx' }],
  openGraph: {
    title: 'ZeeInx | Serialization Consulting',
    description:
      'Global serialization and compliance consulting for life sciences. UK-based experts in pharma serialization, EU FMD implementation, and regulatory compliance.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'ZeeInx',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeeInx | Serialization Consulting',
    description:
      'UK-based global serialization and compliance consulting for life sciences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
