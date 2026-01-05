import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                </svg>
                AI-Powered Electrical Estimating
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Stop Spending Hours on</span>
              <span className="block text-orange-400 mt-2">Blueprint Takeoffs</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              AI analyzes your electrical blueprints in minutes. Get accurate counts of outlets, switches,
              lights, and panels. Save 5+ hours per estimate and win more bids.
            </p>
            <div className="mx-auto mt-8 max-w-md sm:flex sm:justify-center gap-4">
              <Link
                href="/dashboard"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all"
              >
                ⚡ Try Live Demo
              </Link>
              <a
                href="#pricing"
                className="flex w-full items-center justify-center rounded-lg border-2 border-orange-400 bg-transparent px-8 py-4 text-lg font-semibold text-orange-400 hover:bg-orange-400 hover:text-white transition-all"
              >
                See Pricing
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              ✓ No credit card required • ✓ See real estimates • ✓ Built for electricians
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400">80%</div>
              <div className="mt-2 text-gray-300">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">95%</div>
              <div className="mt-2 text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">24/7</div>
              <div className="mt-2 text-gray-300">Always Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Built Specifically for Electrical Contractors</h2>
            <p className="mt-4 text-xl text-gray-300">
              Everything you need to estimate faster and win more jobs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-slate-800 rounded-xl p-8 border-2 border-slate-700 hover:border-orange-500 transition-all">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Lightning Fast Analysis</h3>
              <p className="mt-4 text-gray-300">
                Upload blueprints and get complete component counts in 30 seconds.
                What used to take 3-5 hours now takes minutes.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border-2 border-slate-700 hover:border-orange-500 transition-all">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Accurate Component Detection</h3>
              <p className="mt-4 text-gray-300">
                AI identifies outlets, switches, light fixtures, panels, and special receptacles
                with 95%+ accuracy.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border-2 border-slate-700 hover:border-orange-500 transition-all">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Professional Material Lists</h3>
              <p className="mt-4 text-gray-300">
                Automatically generated material lists you can send straight to suppliers.
                Export to Excel with one click.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border-2 border-slate-700 hover:border-orange-500 transition-all">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Win More Bids</h3>
              <p className="mt-4 text-gray-300">
                Respond to RFPs faster than your competition. Submit more accurate bids
                and reduce material waste.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border-2 border-slate-700 hover:border-orange-500 transition-all">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Cloud-Based & Secure</h3>
              <p className="mt-4 text-gray-300">
                Access your estimates from anywhere. All blueprints encrypted and
                securely stored in the cloud.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border-2 border-slate-700 hover:border-orange-500 transition-all">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Expert Support</h3>
              <p className="mt-4 text-gray-300">
                Get help from our team when you need it. We understand electrical
                contracting and we're here to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-xl text-gray-300">Choose the plan that works for your business</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8 border-2 border-slate-700">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">Basic</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="mt-4 text-gray-300">Perfect for small contractors</p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-gray-300">50 estimates per month</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-gray-300">AI blueprint analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-gray-300">Excel export</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-gray-300">Email support</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="mt-8 block w-full rounded-lg bg-slate-700 px-6 py-3 text-center font-semibold text-white hover:bg-slate-600 transition-all"
              >
                Try Demo
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-2 border-orange-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">Pro</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">$199</span>
                  <span className="text-orange-100">/month</span>
                </div>
                <p className="mt-4 text-orange-100">For growing businesses</p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-white font-semibold">Unlimited estimates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-white">AI blueprint analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-white">Excel export</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-white font-semibold">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-white font-semibold">API access</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="ml-3 text-white font-semibold">Team accounts</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="mt-8 block w-full rounded-lg bg-white px-6 py-3 text-center font-bold text-orange-600 hover:bg-gray-100 transition-all"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Save 5+ Hours Per Estimate?</h2>
          <p className="mt-4 text-xl text-orange-100">
            Try the demo now. See how AI can transform your estimating process.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-orange-600 shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all"
          >
            ⚡ Try Live Demo Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <a href="mailto:support@estimateai.com" className="hover:text-white">Contact Support</a>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            © 2025 EstimateAI. Built for electrical contractors.
          </p>
        </div>
      </footer>
    </div>
  )
}
