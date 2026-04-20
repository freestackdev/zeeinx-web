import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Zeeinx',
  description: 'Terms of Service for Zeeinx Serialization Consulting — the terms governing use of our website and services.',
};

const sections = [
  {
    title: '1. Introduction',
    content: `These Terms of Service ("Terms") govern your use of the Zeeinx website located at zeeinx.com and any related services provided by Zeeinx Ltd ("Zeeinx", "we", "us", or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.`,
  },
  {
    title: '2. About Zeeinx',
    content: `Zeeinx Ltd is a UK-registered consulting firm specialising in pharmaceutical serialization and regulatory compliance. Our registered office is at Churchill House, 120 Bunns Ln, Mill Hill, London, UK. We provide advisory and implementation services to pharmaceutical, healthcare, and life sciences organisations.`,
  },
  {
    title: '3. Use of This Website',
    content: `You may use this website for lawful purposes only and in a manner consistent with all applicable laws and regulations. You agree not to:

• Use the website in any way that is unlawful, harmful, fraudulent, or deceptive.
• Attempt to gain unauthorised access to any part of the website or its underlying systems.
• Transmit any malware, viruses, or other harmful code.
• Scrape, copy, or reproduce content from this website without our prior written consent.
• Use the website in any way that could damage, disable, or impair its operation.

We reserve the right to restrict or terminate your access to the website at any time without notice if we believe you have violated these Terms.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content on this website — including text, graphics, logos, icons, images, and software — is the property of Zeeinx Ltd or its content suppliers and is protected by UK and international copyright and intellectual property law. You may view, print, and download content from this website for your own personal, non-commercial use only. Any other use requires our prior written permission.`,
  },
  {
    title: '5. Consulting Services',
    content: `The information on this website is provided for general information purposes only and does not constitute professional regulatory or legal advice. Specific consulting services are governed by separate engagement agreements entered into between Zeeinx and the client. The existence of this website does not create any client relationship or professional obligation between Zeeinx and any visitor.`,
  },
  {
    title: '6. Accuracy of Information',
    content: `We take reasonable care to ensure the accuracy and currency of the information on this website. However, we make no warranties or representations, express or implied, as to the accuracy, completeness, or fitness for purpose of any information on this site. Regulatory requirements in the pharmaceutical sector change frequently; always verify compliance requirements with the relevant regulatory authority.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, Zeeinx Ltd shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of this website or reliance on any information it contains. This includes, without limitation, loss of profits, business interruption, or loss of data. Nothing in these Terms limits our liability for death or personal injury caused by our negligence, or for fraudulent misrepresentation.`,
  },
  {
    title: '8. Third-Party Links',
    content: `This website may contain links to third-party websites for convenience and informational purposes. These links do not constitute an endorsement of those sites or their content. We have no control over and accept no responsibility for the content, privacy practices, or availability of any linked third-party site. Accessing third-party sites via links on our website is entirely at your own risk.`,
  },
  {
    title: '9. Privacy',
    content: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of personal data.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any dispute arising in connection with these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: '11. Changes to These Terms',
    content: `We may update these Terms from time to time. Any changes will be posted on this page with a revised effective date. Your continued use of the website following the posting of changes constitutes your acceptance of the updated Terms. We encourage you to review this page periodically.`,
  },
  {
    title: '12. Contact',
    content: `If you have any questions about these Terms, please contact us at:

Zeeinx Ltd
Churchill House, 120 Bunns Ln, Mill Hill, London, UK
Email: info@zeeinx.com
Phone: +44 203 097 1597`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-32 pb-14 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0E2A50 100%)' }}
        >
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-white/50 text-sm">
              Effective date: 1 January 2025 &nbsp;·&nbsp; Last updated: April 2026
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 leading-relaxed mb-12 text-base border-l-4 border-cyan-400 pl-5">
              Please read these Terms of Service carefully before using the Zeeinx website. By accessing or using our site you agree to these terms.
            </p>

            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-bold text-navy-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Zeeinx Ltd. All rights reserved.
              </p>
              <Link
                href="/privacy-policy"
                className="text-sm text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
