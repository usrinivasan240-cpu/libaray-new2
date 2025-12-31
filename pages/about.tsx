import Head from 'next/head';
import { BookOpen, Target, Users, Award } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | E-Library System</title>
        <meta
          name="description"
          content="Learn about our mission to revolutionize library services for students through digital innovation."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-gradient">E-Library System</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transforming the traditional library experience into a seamless digital
                journey for modern students.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-400 mb-4">
                  We believe that access to knowledge should be effortless and
                  instant. Our mission is to eliminate the friction between students
                  and educational resources by leveraging technology.
                </p>
                <p className="text-gray-400 mb-4">
                  The traditional library system, while valuable, often comes with
                  inefficiencies - uncertain availability, long queues, and limited
                  operating hours. We're changing that.
                </p>
                <p className="text-gray-400">
                  Our E-Library System bridges the gap between physical libraries
                  and digital convenience, empowering students to focus on what matters
                  most: learning.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
                <BookOpen className="w-24 h-24 text-primary mx-auto mb-6" />
                <p className="text-center text-2xl font-bold text-white">
                  Making Knowledge Accessible
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Digital Catalog
                  </h3>
                  <p className="text-gray-400">
                    Access thousands of books across various categories with our
                    comprehensive digital catalog.
                  </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Real-time Updates
                  </h3>
                  <p className="text-gray-400">
                    Know exactly when books will be available with our live status
                    tracking system.
                  </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Student-First Design
                  </h3>
                  <p className="text-gray-400">
                    Built specifically for students, with features that address real
                    academic needs.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Why Choose Us?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Time-Saving
                        </h4>
                        <p className="text-gray-400">
                          Check availability from anywhere, save trips to the library
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Convenient Print Services
                        </h4>
                        <p className="text-gray-400">
                          Submit print requests online and collect when ready
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Always Available
                        </h4>
                        <p className="text-gray-400">
                          24/7 access to digital resources and information
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-dark rounded-2xl p-8 border border-gray-800">
                    <div className="text-5xl font-bold text-primary mb-2">10K+</div>
                    <p className="text-gray-400">Books Available</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
