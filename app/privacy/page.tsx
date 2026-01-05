export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl bg-white shadow sm:rounded-lg px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: January 4, 2026</p>

        <div className="mt-8 space-y-6 text-sm text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p className="mt-2">
              EstimateAI ("we", "our", or "us") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <h3 className="mt-3 font-semibold">Personal Information</h3>
            <p className="mt-2">We collect the following personal information:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Company name (if provided)</li>
              <li>Phone number (if provided)</li>
              <li>Payment information (processed securely by Stripe)</li>
            </ul>

            <h3 className="mt-3 font-semibold">Usage Data</h3>
            <p className="mt-2">We automatically collect certain information:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Device information</li>
              <li>Usage patterns and interactions with the Service</li>
            </ul>

            <h3 className="mt-3 font-semibold">Blueprint and Project Data</h3>
            <p className="mt-2">
              We collect and store blueprints, project names, notes, and related data you upload
              to the Service for the purpose of providing AI-powered electrical estimating.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <p className="mt-2">We use your information to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>Provide, operate, and maintain the Service</li>
              <li>Process your blueprints using AI to generate estimates</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve the Service</li>
              <li>Detect, prevent, and address technical issues and security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing and Disclosure</h2>
            <p className="mt-2">We share your information with third-party service providers:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Supabase:</strong> Database and authentication services
              </li>
              <li>
                <strong>AWS S3:</strong> Secure storage of blueprint files
              </li>
              <li>
                <strong>OpenAI:</strong> AI processing of blueprints to generate estimates
              </li>
              <li>
                <strong>Stripe:</strong> Payment processing and subscription management
              </li>
              <li>
                <strong>Vercel:</strong> Hosting and infrastructure
              </li>
            </ul>
            <p className="mt-2">
              We do NOT sell your personal information or blueprint data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Data Security</h2>
            <p className="mt-2">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>Encryption in transit (HTTPS/TLS 1.3)</li>
              <li>Encryption at rest for database and file storage</li>
              <li>Role-based access controls</li>
              <li>Multi-factor authentication support</li>
              <li>Regular security audits and monitoring</li>
              <li>Audit logging of all critical actions</li>
            </ul>
            <p className="mt-2">
              However, no method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Data Retention</h2>
            <p className="mt-2">
              We retain your personal information and project data for as long as your account is
              active or as needed to provide you the Service. You may request deletion of your
              data at any time by contacting us or through your account settings.
            </p>
            <p className="mt-2">
              After account deletion, we will delete or anonymize your data within 30 days, except
              where we are required to retain it for legal or regulatory compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Your Rights (GDPR & CCPA)</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@estimateai.com" className="text-blue-600 hover:underline">
                privacy@estimateai.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Cookies and Tracking</h2>
            <p className="mt-2">
              We use essential cookies to maintain your session and authentication. We do not use
              third-party advertising or tracking cookies without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Children's Privacy</h2>
            <p className="mt-2">
              Our Service is not intended for individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected
              information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. International Data Transfers</h2>
            <p className="mt-2">
              Your information may be transferred to and processed in countries other than your
              country of residence. We ensure appropriate safeguards are in place to protect your
              data in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the "Last
              updated" date. You are advised to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="mt-2 space-y-1 ml-4">
              <li>
                Email:{' '}
                <a href="mailto:privacy@estimateai.com" className="text-blue-600 hover:underline">
                  privacy@estimateai.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
