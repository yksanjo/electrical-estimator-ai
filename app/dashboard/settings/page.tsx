import { createClient } from '@/lib/supabase/server'
import { STRIPE_PLANS } from '@/lib/stripe'
import Link from 'next/link'

export default async function SettingsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single()

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      {/* Account Information */}
      <div className="mt-8 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <div className="px-4 py-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{user?.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Subscription Status</dt>
              <dd className="mt-1">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    profile?.subscription_status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {profile?.subscription_status || 'inactive'}
                </span>
              </dd>
            </div>
            {profile?.subscription_tier && (
              <div>
                <dt className="text-sm font-medium text-gray-500">Current Plan</dt>
                <dd className="mt-1 text-sm text-gray-900 capitalize">
                  {profile.subscription_tier}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {/* Subscription Plans */}
      {profile?.subscription_status !== 'active' && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose a Plan</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Object.entries(STRIPE_PLANS).map(([key, plan]) => (
              <div
                key={key}
                className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${(plan.price / 100).toFixed(0)}
                  </span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
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
                      <span className="ml-3 text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <form action="/api/stripe/create-checkout-session" method="POST" className="mt-6">
                  <input type="hidden" name="priceId" value={plan.priceId} />
                  <input type="hidden" name="tier" value={key} />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Subscribe to {plan.name}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manage Subscription */}
      {profile?.subscription_status === 'active' && (
        <div className="mt-8 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900">Manage Subscription</h2>
          <p className="mt-2 text-sm text-gray-600">
            Update your payment method or cancel your subscription
          </p>
          <form action="/api/stripe/create-portal-session" method="POST" className="mt-4">
            <button
              type="submit"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Manage Billing
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
