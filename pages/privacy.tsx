import Head from 'next/head';
import SectionReveal from '@/components/SectionReveal';

export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Privacy Policy | E-Library System</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your information."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-gradient">Policy</span>
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
                  1. Introduction
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Welcome to the E-Library System. We respect your privacy and are
                  committed to protecting your personal information. This privacy
                  policy will inform you about how we handle your data when you use
                  our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    2.1 Personal Information
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    When you log in using your Gmail ID, we collect your email address
                    and basic profile information provided by Google. This is used
                    solely for authentication and service purposes.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    2.2 Print Service Information
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    For print services, we collect document names, print preferences,
                    and payment information. Your documents are handled with
                    confidentiality and are not shared with third parties.
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    2.3 Usage Data
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We may collect information about your usage of the platform,
                    including pages visited, search queries, and interaction patterns,
                    to improve our services.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>To provide and maintain our services</li>
                  <li>To process print requests and payments</li>
                  <li>To authenticate users and manage accounts</li>
                  <li>To improve our platform and user experience</li>
                  <li>To respond to your queries and support requests</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Data Sharing
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third
                  parties. We may share your information only in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>With your consent</li>
                  <li>With service providers who assist us in operations</li>
                  <li>When required by law or to protect our rights</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement appropriate security measures to protect your
                  information from unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Opt-out of certain data processing</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Cookies
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your
                  browsing experience, analyze usage patterns, and improve our
                  services. You can manage your cookie preferences through your
                  browser settings.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this privacy policy from time to time. We will
                  notify you of any significant changes by posting the new policy on
                  our website and updating the "Last Updated" date.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our data
                  practices, please contact us at:
                </p>
                <p className="text-gray-400">
                  Email: elibrary.support@gmail.com
                  <br />
                  Phone: +91 9XXXXXXXXX
                </p>
              </section>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
