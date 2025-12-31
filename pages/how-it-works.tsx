import Head from 'next/head';
import { LogIn, Search, CheckCircle, Upload, CreditCard, Package } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

export default function HowItWorks() {
  const steps = [
    {
      icon: LogIn,
      title: 'Login Using Gmail ID',
      description:
        'Access our platform using your Gmail ID for quick and secure authentication.',
      color: 'text-blue-400',
    },
    {
      icon: Search,
      title: 'Search for Books',
      description:
        'Use our powerful search to find books by title, author, or category.',
      color: 'text-green-400',
    },
    {
      icon: CheckCircle,
      title: 'Check Availability & Due Date',
      description:
        'View real-time book availability and see when unavailable books will be returned.',
      color: 'text-yellow-400',
    },
    {
      icon: Upload,
      title: 'Upload Notes for Printing',
      description:
        'Upload your study materials and specify your printing requirements.',
      color: 'text-purple-400',
    },
    {
      icon: CreditCard,
      title: 'Pay Securely Using GPay',
      description:
        'Complete payment for print services quickly and securely with Google Pay.',
      color: 'text-red-400',
    },
    {
      icon: Package,
      title: 'Collect Printout Easily',
      description:
        'Pick up your printed materials at the library counter when ready.',
      color: 'text-cyan-400',
    },
  ];

  return (
    <>
      <Head>
        <title>How It Works | E-Library System</title>
        <meta
          name="description"
          content="Learn how to use our E-Library System to access books, check availability, and request print services."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                How It <span className="text-gradient">Works</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Getting started with our E-Library System is simple. Follow these
                steps to access books and print services.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 relative"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                      {index + 1}
                    </div>
                    <div className="mb-6 pt-4">
                      <Icon className={`w-12 h-12 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-20 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need More Help?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  If you have any questions or need assistance, our support team is
                  here to help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:elibrary.support@gmail.com"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  <span>Contact Support</span>
                </a>
                <a
                  href="/faq"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  <span>View FAQ</span>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
