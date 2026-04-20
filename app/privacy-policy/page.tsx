import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | ZeeInx',
  description: 'Privacy Policy for ZeeInx Serialization Consulting — how we collect, use, and protect your personal data.',
};

const sections = [
  {
    title: '1. Who We Are',
    content: `ZeeInx Ltd ("ZeeInx", "we", "us", or "our") is a UK-registered consulting firm specialising in pharmaceutical serialization and regulatory compliance. Our registered office is at Churchill House, 120 Bunns Ln, Mill Hill, London, UK. We are committed to protecting and respecting your privacy in accordance with the UK GDPR and the Data Protection Act 2018.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect and process the following personal data:

• Contact information: name, email address, telephone number, and company name submitted via our contact form or by email.
• Enquiry content: the message or details you provide when making an enquiry.
• Usage data: information about how you interact with our website, including IP address, browser type, pages visited, and time spent on each page. This data is collected through anonymised analytics and does not identify you personally.
• Communications data: records of correspondence between you and ZeeInx.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

• To respond to your enquiries and provide information about our services.
• To communicate with you regarding proposals, engagements, and project delivery.
• To improve and optimise our website based on aggregated usage data.
• To comply with applicable legal and regulatory obligations.

We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `We process your personal data on the following legal bases:

• Legitimate interests: responding to enquiries and maintaining business communications.
• Contract performance: processing data necessary to fulfil a consulting engagement.
• Legal obligation: where processing is required to comply with applicable law.
• Consent: where you have explicitly consented to receive specific communications from us.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain personal data for as long as is necessary for the purposes for which it was collected, or as required by applicable law. Contact enquiry data is typically retained for up to 24 months. Engagement-related data is retained for the duration of the engagement and for a further 7 years in line with UK business record-keeping requirements.`,
  },
  {
    title: '6. Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS encryption and our data is stored on secure, EU/UK-hosted infrastructure. Access to personal data is restricted to authorised personnel who require it for legitimate business purposes.`,
  },
  {
    title: '7. Your Rights',
    content: `Under UK data protection law, you have the following rights:

• Right of access: to request a copy of the personal data we hold about you.
• Right to rectification: to request correction of inaccurate or incomplete data.
• Right to erasure: to request deletion of your personal data in certain circumstances.
• Right to restriction: to request that we restrict processing of your data.
• Right to data portability: to receive your data in a structured, machine-readable format.
• Right to object: to object to processing based on legitimate interests.

To exercise any of these rights, please contact us at info@zeeinx.com. We will respond within one month.`,
  },
  {
    title: '8. Cookies',
    content: `Our website uses only essential cookies necessary for the site to function correctly. We do not use tracking or advertising cookies. If we introduce non-essential cookies in the future, we will update this policy and obtain your consent where required.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised effective date. We encourage you to review this page periodically.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, or if you wish to exercise your data subject rights, please contact us at:

ZeeInx Ltd
Churchill House, 120 Bunns Ln, Mill Hill, London, UK
Email: info@zeeinx.com
Phone: +44 203 097 1597

You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you believe we have not handled your data appropriately.`,
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">
              Effective date: 1 January 2025 &nbsp;·&nbsp; Last updated: April 2026
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 leading-relaxed mb-12 text-base border-l-4 border-cyan-400 pl-5">
              This policy explains how ZeeInx Ltd collects, uses, and protects personal data provided by visitors to our website and individuals who contact us. Please read it carefully.
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
                &copy; {new Date().getFullYear()} ZeeInx Ltd. All rights reserved.
              </p>
              <Link
                href="/terms-of-service"
                className="text-sm text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
