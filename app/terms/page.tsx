export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl bg-white shadow sm:rounded-lg px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: January 4, 2026</p>

        <div className="mt-8 space-y-6 text-sm text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing and using EstimateAI ("the Service"), you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Use License</h2>
            <p className="mt-2">
              Permission is granted to temporarily use the Service for personal or commercial
              electrical estimating purposes. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
              <li>Modify or copy the Service materials</li>
              <li>Use the materials for any commercial purpose other than electrical estimating</li>
              <li>Attempt to decompile or reverse engineer any software contained in the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Disclaimer</h2>
            <p className="mt-2 font-semibold">
              THE SERVICE IS PROVIDED "AS IS" FOR ESTIMATING PURPOSES ONLY AND IS NOT PROFESSIONAL ADVICE.
            </p>
            <p className="mt-2">
              The materials and estimates provided by the Service are for informational and
              estimation purposes only. EstimateAI makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mt-2">
              Users are solely responsible for verifying all calculations, estimates, and material
              lists before using them in actual projects or bids. EstimateAI shall not be held
              liable for any errors in estimates, bidding mistakes, project losses, or damages
              resulting from use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Limitations</h2>
            <p className="mt-2">
              In no event shall EstimateAI or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption, bidding errors, or project losses) arising out of the use or inability
              to use the Service.
            </p>
            <p className="mt-2">
              Our total liability to you for any claims arising from or related to this agreement
              or the Service is limited to the amount you paid us for the Service in the 12 months
              prior to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Subscription and Billing</h2>
            <p className="mt-2">
              Paid subscriptions are billed monthly or annually. You authorize us to charge your
              payment method for the subscription fees. Subscriptions automatically renew unless
              cancelled before the renewal date.
            </p>
            <p className="mt-2">
              You may cancel your subscription at any time through your account settings. Upon
              cancellation, you will retain access until the end of your current billing period.
              No refunds will be provided for partial periods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. User Data and Content</h2>
            <p className="mt-2">
              You retain all rights to the blueprints and data you upload to the Service. By
              uploading content, you grant us a license to store, process, and analyze your
              blueprints solely for the purpose of providing the Service.
            </p>
            <p className="mt-2">
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Intellectual Property</h2>
            <p className="mt-2">
              The Service and its original content, features, and functionality are owned by
              EstimateAI and are protected by international copyright, trademark, patent, trade
              secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Termination</h2>
            <p className="mt-2">
              We may terminate or suspend your account and access to the Service immediately,
              without prior notice or liability, for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Changes to Terms</h2>
            <p className="mt-2">
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes via email or through the Service. Your continued use of the Service
              after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Governing Law</h2>
            <p className="mt-2">
              These Terms shall be governed by and construed in accordance with the laws of the
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:support@estimateai.com" className="text-blue-600 hover:underline">
                support@estimateai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
