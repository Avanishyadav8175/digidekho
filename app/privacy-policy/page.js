import ServicesShowcase from '../../components/shared/ServicesShowcase';
import ContactSection from '../../components/shared/ContactSection';
import FAQSection from '../../components/shared/FAQSection';

export const metadata = {
  title: 'Privacy Policy - Digital Dekho',
  description: 'Privacy Policy for Digital Dekho - Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Fill out contact forms or request quotes</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
                <li>Use our website and services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include your name, email address, phone number, company name, 
                project details, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, and marketing communications</li>
                <li>Process transactions and send related information</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With service providers who assist us in operating our website and conducting business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@digitaldekho.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 9996821315</p>
                <p className="text-gray-700"><strong>Address:</strong> delhi, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <ServicesShowcase title="Our Secure Digital Services" />

      {/* Privacy FAQ */}
      <FAQSection 
        title="Privacy & Security FAQ"
        faqs={[
          {
            question: 'How do you protect my personal information?',
            answer: 'We use industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information from unauthorized access.'
          },
          {
            question: 'Do you share my information with third parties?',
            answer: 'We do not sell or share your personal information with third parties for marketing purposes. We only share information with trusted service providers who help us operate our business.'
          },
          {
            question: 'Can I request deletion of my personal data?',
            answer: 'Yes, you have the right to request deletion of your personal data. Contact us and we will process your request in accordance with applicable privacy laws.'
          },
          {
            question: 'How long do you keep my information?',
            answer: 'We retain your information only as long as necessary to provide our services and comply with legal obligations. You can request information about our retention policies.'
          },
          {
            question: 'Do you use cookies on your website?',
            answer: 'Yes, we use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.'
          }
        ]}
      />

      {/* Contact Section */}
      <ContactSection 
        title="Questions About Privacy?"
        showForm={false}
      />
    </div>
  );
}