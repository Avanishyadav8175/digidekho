import ServicesShowcase from '../../components/shared/ServicesShowcase';
import ContactSection from '../../components/shared/ContactSection';
import FAQSection from '../../components/shared/FAQSection';

export const metadata = {
  title: 'Terms of Service - Digital Dekho',
  description: 'Terms of Service for Digital Dekho - Read our terms and conditions for using our digital services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Digital Dekho's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                Digital Dekho provides digital services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>AI Automation Solutions</li>
                <li>Digital Marketing Services</li>
                <li>SEO Services</li>
                <li>Video and Photo Editing</li>
                <li>Google Ads and Meta Ads Management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any fraudulent or illegal activities</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms for our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Payments are due as specified in the project agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All prices are subject to applicable taxes</li>
                <li>We reserve the right to modify pricing with notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive ownership of the final deliverables. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We retain rights to our methodologies and processes</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>We may showcase completed work in our portfolio</li>
                <li>Clients must respect third-party intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Project Scope and Changes</h2>
              <p className="text-gray-700 mb-4">
                Project scope and modifications:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Project scope will be clearly defined in the agreement</li>
                <li>Changes to scope may result in additional charges</li>
                <li>Timeline adjustments may be necessary for scope changes</li>
                <li>All changes must be agreed upon in writing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Digital Dekho shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
              <p className="text-gray-700 mb-4">
                We strive to maintain high service availability but do not guarantee uninterrupted service. 
                Maintenance, updates, or unforeseen circumstances may cause temporary service interruptions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We respect the confidentiality of client information and will not disclose confidential 
                information to third parties without consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with appropriate notice as specified in the project 
                agreement. Termination does not relieve parties of obligations incurred prior to termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the jurisdiction of courts in Mumbai, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Continued use of our services constitutes acceptance of 
                modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@digitaldekho.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 9996821315</p>
                <p className="text-gray-700"><strong>Address:</strong> Mumbai, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <ServicesShowcase title="Our Professional Services" />

      {/* Terms FAQ */}
      <FAQSection 
        title="Terms & Service FAQ"
        faqs={[
          {
            question: 'What happens if I need to cancel my project?',
            answer: 'Project cancellation terms depend on the stage of completion. We provide clear cancellation policies in our project agreements and work with clients to find fair solutions.'
          },
          {
            question: 'Do you provide refunds for your services?',
            answer: 'Refund policies vary by service type and project stage. We discuss refund terms during project initiation and include them in our service agreements.'
          },
          {
            question: 'What if I\'m not satisfied with the delivered work?',
            answer: 'Client satisfaction is our priority. We include revision rounds in our projects and work closely with clients to ensure deliverables meet expectations.'
          },
          {
            question: 'How do you handle intellectual property rights?',
            answer: 'Upon full payment, clients receive ownership of the final deliverables. We retain rights to our methodologies and may showcase work in our portfolio with client permission.'
          },
          {
            question: 'What are your payment terms?',
            answer: 'Payment terms vary by project size and type. Typically, we require a deposit to start work with remaining payments tied to project milestones.'
          }
        ]}
      />

      {/* Contact Section */}
      <ContactSection 
        title="Ready to Work Together?"
        showForm={true}
      />
    </div>
  );
}