import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'

export default async function EstimateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: estimate } = await supabase
    .from('estimates')
    .select('*')
    .eq('id', id)
    .eq('user_id', user!.id)
    .single()

  if (!estimate) {
    notFound()
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{estimate.project_name}</h1>
            <p className="mt-1 text-sm text-gray-500">
              Created {formatDistanceToNow(new Date(estimate.created_at), { addSuffix: true })}
            </p>
          </div>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ← Back to estimates
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Status Card */}
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
          <h3 className="text-sm font-medium text-gray-500">Status</h3>
          <p className="mt-2">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                estimate.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : estimate.status === 'processing'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {estimate.status}
            </span>
          </p>
          {estimate.status === 'processing' && (
            <p className="mt-2 text-sm text-gray-500">
              AI is analyzing your blueprint...
            </p>
          )}
          {estimate.status === 'failed' && estimate.processing_error && (
            <p className="mt-2 text-sm text-red-600">{estimate.processing_error}</p>
          )}
        </div>

        {/* Blueprint Card */}
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
          <h3 className="text-sm font-medium text-gray-500">Blueprint</h3>
          <p className="mt-2 text-sm text-gray-900">{estimate.blueprint_filename}</p>
          <a
            href={estimate.blueprint_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View file →
          </a>
        </div>

        {/* Confidence Score */}
        {estimate.ai_confidence_score && (
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-500">AI Confidence</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {(estimate.ai_confidence_score * 100).toFixed(0)}%
            </p>
            <p className="mt-1 text-sm text-gray-500">Accuracy score</p>
          </div>
        )}
      </div>

      {estimate.status === 'completed' && (
        <>
          {/* Component Counts */}
          <div className="mt-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Electrical Components
            </h2>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              <div className="border-l-4 border-blue-500 pl-4">
                <dt className="text-sm font-medium text-gray-500">Outlets</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {estimate.outlets_count || 0}
                </dd>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <dt className="text-sm font-medium text-gray-500">Switches</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {estimate.switches_count || 0}
                </dd>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <dt className="text-sm font-medium text-gray-500">Lights</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {estimate.lights_count || 0}
                </dd>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <dt className="text-sm font-medium text-gray-500">Panels</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {estimate.panels_count || 0}
                </dd>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <dt className="text-sm font-medium text-gray-500">Receptacles</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {estimate.receptacles_count || 0}
                </dd>
              </div>
            </dl>
          </div>

          {/* Materials List */}
          {estimate.materials && Array.isArray(estimate.materials) && estimate.materials.length > 0 && (
            <div className="mt-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Materials List</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                        Item
                      </th>
                      <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                        Quantity
                      </th>
                      <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {estimate.materials.map((material: any, index: number) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                          {material.item}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {material.quantity}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {material.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                  Export to Excel
                </button>
              </div>
            </div>
          )}

          {/* Notes */}
          {estimate.notes && (
            <div className="mt-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Notes</h2>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{estimate.notes}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
