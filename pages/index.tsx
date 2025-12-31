import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Printer, ArrowRight, CheckCircle, XCircle, Search } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionReveal from '@/components/SectionReveal';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Library System | Smart Digital Library for Modern Learning</title>
        <meta
          name="description"
          content="Access thousands of books, check real-time availability, and request print services instantly with our modern E-Library System."
        />
        <meta name="keywords" content="library, e-library, digital library, books, print services, education" />
      </Head>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <SectionReveal>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Smart Digital Library
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Smart Digital E-Library for{' '}
              <span className="text-gradient">Modern Learning</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Access thousands of books, check real-time availability, and request
              print services instantly. No more waiting in long queues!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/elibrary">Explore Library</CTAButton>
              <CTAButton href="/print-services" primary={false}>
                Print Notes
              </CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Problem vs Solution
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Traditional libraries have limitations. Our digital solution
                transforms the experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Manual library searches waste valuable time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Uncertain book availability before visiting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Long queues for printing study materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Limited operating hours and physical access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-green-400">Our Solution</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Digital search with real-time availability status</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Know before you go - check from anywhere</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Submit print requests online, collect when ready</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>24/7 access to digital resources and services</span>
                  </li>
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything you need for a seamless library experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Real-time Search
                </h3>
                <p className="text-gray-400">
                  Search thousands of books instantly with our powerful search
                  engine. Filter by author, category, or title.
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Live Availability
                </h3>
                <p className="text-gray-400">
                  Check book availability in real-time. Know who has the book
                  and when it will be returned.
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Printer className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Print Services
                </h3>
                <p className="text-gray-400">
                  Upload notes, choose print options, and pay via GPay.
                  Collect your printouts without waiting.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Library Experience?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of students who are already using our smart E-Library
              System.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/elibrary">Get Started</CTAButton>
              <Link
                href="/how-it-works"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>Learn how it works</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
