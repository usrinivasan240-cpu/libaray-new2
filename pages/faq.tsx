import Head from 'next/head';
import { HelpCircle } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create an account?',
      answer:
        'Simply login using your Gmail ID. No separate account creation is required. Our system uses Google authentication for quick and secure access.',
    },
    {
      question: 'How can I check book availability?',
      answer:
        'Visit our E-Library page, search for the book you need, and you will see real-time availability status. If a book is issued, you can also see the due date when it will be available again.',
    },
    {
      question: 'Is the print service secure?',
      answer:
        'Yes, our print service is completely secure. Your documents are handled with confidentiality, and payments are processed securely through GPay.',
    },
    {
      question: 'Can I track due dates online?',
      answer:
        'Absolutely! When you search for a book, if it is currently issued, you will see the due date. This helps you plan when to return or when a popular book will be available.',
    },
    {
      question: 'What file formats are supported for printing?',
      answer:
        'We support PDF, DOC, and DOCX formats for printing. The maximum file size is 10MB per document.',
    },
    {
      question: 'How long does it take for print orders to be processed?',
      answer:
        'Most print orders are processed within 1-2 hours during library hours. You will be notified when your printouts are ready for collection.',
    },
    {
      question: 'Is there a refund policy for print services?',
      answer:
        'No, we do not offer refunds for print services once the order has been submitted and payment has been processed.',
    },
    {
      question: 'Can I cancel a print request after submission?',
      answer:
        'Print requests can be cancelled within 15 minutes of submission. After that, the order enters processing and cannot be cancelled.',
    },
    {
      question: 'How do I contact support?',
      answer:
        'You can reach us via email at elibrary.support@gmail.com, call us at +91 9XXXXXXXXX, or chat with us on WhatsApp for instant support.',
    },
    {
      question: 'Are there any fees for using the E-Library system?',
      answer:
        'Accessing the digital catalog and checking book availability is completely free. Only print services have charges as per our pricing page.',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ | E-Library System</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about our E-Library System and services."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find answers to common questions about our E-Library System and
                services.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <div className="h-px bg-gray-800 mb-4"></div>
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-16 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-400 mb-6">
                Can't find the answer you're looking for? Our support team is here
                to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <span>Contact Support</span>
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
