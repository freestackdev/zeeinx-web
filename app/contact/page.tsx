import type { Metadata } from 'next';
import { MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Zeeinx Serialization Consulting',
  description:
    'Get in touch with Zeeinx to discuss your pharmaceutical serialization and compliance requirements. UK-based experts available for consultation.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-32 pb-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0E2A50 100%)' }}
          aria-labelledby="contact-page-heading"
        >
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h1
              id="contact-page-heading"
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5"
            >
              Contact Zeeinx
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Ready to discuss your serialization and compliance requirements? Our
              team is here to help you navigate every step of the journey.
            </p>
          </div>
        </section>

        <section className="bg-gray-50/60 py-8 relative -mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactInfoCards />
          </div>
        </section>

        <section
          className="py-20 lg:py-28 bg-white"
          aria-labelledby="contact-form-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="inline-block text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
                  Send a Message
                </span>
                <h2
                  id="contact-form-heading"
                  className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5"
                >
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-500 leading-relaxed text-base mb-8">
                  Fill in the form and one of our serialization experts will be in
                  touch within 24 hours to discuss how we can support your
                  compliance objectives.
                </p>

                <div className="bg-navy-50 rounded-2xl p-7 border border-navy-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center">
                      <MessageSquare size={16} className="text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-navy-900 text-base">
                      What to Expect
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      'Response within 24 business hours',
                      'Initial 30-minute discovery call at no cost',
                      'Tailored assessment proposal delivered within 5 days',
                      'Fully confidential — NDA available upon request',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <span
                          className="w-4 h-4 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
