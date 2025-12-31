import Head from 'next/head';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | E-Library System</title>
        <meta
          name="description"
          content="Get in touch with our support team for any queries or assistance with the E-Library System."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions or need assistance? We're here to help you make the
                most of our E-Library System.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:elibrary.support@gmail.com"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          elibrary.support@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+919XXXXXXXXX"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          +91 9XXXXXXXXX
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Location
                        </h3>
                        <p className="text-gray-400">
                          College Main Library
                          <br />
                          Campus, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    WhatsApp Support
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Get instant support on WhatsApp for quick queries and assistance.
                  </p>
                  <a
                    href="https://wa.me/919XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your query or feedback..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Submit a Query via Google Form
              </h2>
              <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
                You can also submit your queries and feedback using our Google Form.
                We'll get back to you as soon as possible.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-gray-100 text-dark font-semibold rounded-lg transition-all duration-200"
                >
                  <span>Open Google Form</span>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
