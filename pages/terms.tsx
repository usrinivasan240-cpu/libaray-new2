import Head from 'next/head';
import SectionReveal from '@/components/SectionReveal';

export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Terms & Conditions | E-Library System</title>
        <meta
          name="description"
          content="Read our terms and conditions to understand the rules and regulations for using our E-Library System."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms & <span className="text-gradient">Conditions</span>
              </h1>
              <p className="text-gray-400">
                Last updated: {currentYear}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="prose prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  By accessing and using the E-Library System, you accept and agree
                  to be bound by these Terms and Conditions. If you do not agree
                  to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Use of Services
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    2.1 Eligibility
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    You must be a student or faculty member of the college to use
                    our services. You must be at least 13 years old to use this
                    platform.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    2.2 Account Security
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your
                    Gmail account. Any activity that occurs under your account is
                    your responsibility.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    2.3 Acceptable Use
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    You agree to use our services only for lawful purposes and in
                    accordance with these terms. You must not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Use the service for any illegal purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the service</li>
                    <li>Upload malicious or harmful content</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. Library Services
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    3.1 Book Availability
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    While we strive to provide accurate real-time availability
                    information, there may be delays in updating the system. We
                    recommend verifying availability when visiting the library.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    3.2 Borrowing Rules
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    All borrowing rules, including due dates and renewal policies,
                    are determined by the college library and are subject to
                    change. Users must comply with all library rules and regulations.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Print Services
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    4.1 Service Fees
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Print services are subject to fees as specified on our pricing
                    page. Fees may change without prior notice.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    4.2 Payment
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Payment must be made via GPay before printing begins. We do not
                    accept cash payments or other payment methods for print services.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    4.3 No Refund Policy
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Once a print request has been submitted and payment has been
                    processed, no refunds will be issued. Print requests can be
                    cancelled within 15 minutes of submission.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    4.4 Content Guidelines
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Users must ensure they have the right to print any content they
                    submit. We reserve the right to refuse any print request that
                    violates copyright laws or contains inappropriate material.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  All content on the E-Library System, including but not limited to
                  text, graphics, logos, and software, is owned by the college or
                  its licensors and is protected by copyright and other intellectual
                  property laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  The E-Library System is provided on an "as is" and "as available"
                  basis. We make no warranties, express or implied, regarding the
                  operation or availability of the service. In no event shall we be
                  liable for any indirect, incidental, special, or consequential
                  damages.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Privacy
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Your use of our services is also governed by our Privacy Policy.
                  Please review our Privacy Policy to understand how we collect,
                  use, and protect your information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Modifications
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued
                  use of the service after any changes constitutes acceptance of the
                  modified terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Termination
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to suspend or terminate your access to the
                  service at any time, without prior notice, for any reason,
                  including but not limited to violation of these terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Governing Law
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  These terms shall be governed by and construed in accordance with
                  the laws of India. Any disputes arising under these terms shall be
                  subject to the exclusive jurisdiction of the courts in India.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions,
                  please contact us at:
                </p>
                <p className="text-gray-400">
                  Email: elibrary.support@gmail.com
                  <br />
                  Phone: +91 9XXXXXXXXX
                  <br />
                  Address: College Main Library, India
                </p>
              </section>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
