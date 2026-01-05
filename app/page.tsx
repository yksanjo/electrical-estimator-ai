import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">AI-Powered Electrical</span>
              <span className="block text-blue-600">Estimating in Minutes</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Upload your blueprints and let AI automatically count outlets, switches, panels, and
              generate accurate material lists. Save 5+ hours per estimate.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get Started Free
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#pricing"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why EstimateAI?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Built specifically for electrical contractors who value their time
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Lightning Fast
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Turn 5-hour estimates into 30-minute estimates. AI analyzes your blueprints
                      instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Accurate Counts
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      AI-powered detection of outlets, switches, lights, panels, and more with
                      confidence scoring.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Secure & Compliant
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Bank-level encryption, SOC 2 controls, and GDPR compliance. Your data is safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg bg-white shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Basic</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$99</span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                </p>
                <p className="mt-6 text-gray-500">Perfect for small contractors</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-700">50 estimates per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-700">AI blueprint analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-700">Excel export</span>
                  </li>
                </ul>
                <Link
                  href="/login"
                  className="mt-8 block w-full rounded-md border border-blue-600 bg-blue-600 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Get started
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-blue-600 shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">Pro</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-white">$199</span>
                  <span className="ml-1 text-xl font-semibold text-blue-200">/month</span>
                </p>
                <p className="mt-6 text-blue-100">For growing businesses</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-white">Unlimited estimates</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-white">Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-white">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-white">API access</span>
                  </li>
                </ul>
                <Link
                  href="/login"
                  className="mt-8 block w-full rounded-md border border-white bg-white py-3 text-center text-sm font-semibold text-blue-600 hover:bg-gray-50"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-500">&copy; 2026 EstimateAI. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
