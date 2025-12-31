import Head from 'next/head';
import { Printer, CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react';
import PrintForm from '@/components/PrintForm';
import SectionReveal from '@/components/SectionReveal';

export default function PrintServices() {
  return (
    <>
      <Head>
        <title>Print Services | E-Library System</title>
        <meta
          name="description"
          content="Upload notes, choose print options, and collect your printouts without waiting in long queues."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-gradient">Print</span> Services
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Upload your notes, choose print options, pay via GPay, and collect
                your printout without waiting in long queues.
              </p>
            </div>
          </SectionReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionReveal>
              <PrintForm />
            </SectionReveal>

            <SectionReveal>
              <div className="space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    How It Works
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Upload Your Document
                        </h3>
                        <p className="text-gray-400">
                          Upload your notes, assignments, or study materials in PDF,
                          DOC, or DOCX format.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Choose Print Options
                        </h3>
                        <p className="text-gray-400">
                          Select black & white or color printing, and specify the
                          number of copies needed.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Pay via GPay
                        </h3>
                        <p className="text-gray-400">
                          Complete payment securely using Google Pay by scanning the
                          QR code at the counter.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Collect Your Printout
                        </h3>
                        <p className="text-gray-400">
                          Your printout will be ready for collection at the library
                          counter. No waiting required!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Benefits
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold">Save Time</h4>
                        <p className="text-gray-400 text-sm">
                          Submit requests online, collect when ready
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold">No Queues</h4>
                        <p className="text-gray-400 text-sm">
                          Skip long waiting lines at the printer
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold">Secure Payment</h4>
                        <p className="text-gray-400 text-sm">
                          Pay securely using GPay
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Pricing Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-700">
                      <span className="text-gray-300">Black & White (A4)</span>
                      <span className="text-white font-semibold">₹2 per page</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-700">
                      <span className="text-gray-300">Color (A4)</span>
                      <span className="text-white font-semibold">₹10 per page</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-300">Double-sided (B&W)</span>
                      <span className="text-white font-semibold">₹3 per page</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </>
  );
}
