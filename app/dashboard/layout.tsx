import Link from 'next/link'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Demo mode - fully functional
  const user = { email: 'demo@electricpro.com' }
  const profile = { subscription_status: 'active' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top banner for demo mode */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-center text-sm font-medium">
        ⚡ Demo Mode - Showing sample estimates • Ready to get started? Contact us to unlock full features
      </div>
      <nav className="bg-white shadow-md border-b-2 border-orange-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                  EstimateAI
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Estimates
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Settings
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-sm text-gray-700">{user.email}</span>
              </div>
              <form action="/auth/signout" method="post" className="ml-4">
                <button
                  type="submit"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {profile?.subscription_status !== 'active' && (
        <div className="bg-yellow-50 border-b border-yellow-200">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-yellow-800">
                Your account is not active. Please subscribe to start creating estimates.
              </p>
              <Link
                href="/dashboard/settings"
                className="text-sm font-medium text-yellow-800 underline hover:text-yellow-900"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
