'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewEstimatePage() {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsUploading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/estimates', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create estimate')
      }

      const { estimateId } = await response.json()
      router.push(`/dashboard/estimates/${estimateId}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setIsUploading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Create New Estimate</h1>
        <p className="mt-2 text-sm text-gray-700">
          Upload a blueprint and our AI will analyze it to generate your estimate
        </p>
      </div>

      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-8">
        <div>
          <label htmlFor="project_name" className="block text-sm font-medium text-gray-900">
            Project Name
          </label>
          <input
            type="text"
            name="project_name"
            id="project_name"
            required
            className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Main Street Renovation"
          />
        </div>

        <div>
          <label htmlFor="blueprint" className="block text-sm font-medium text-gray-900">
            Blueprint File
          </label>
          <div className="mt-2">
            <input
              type="file"
              name="blueprint"
              id="blueprint"
              required
              accept=".pdf,.png,.jpg,.jpeg"
              className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <p className="mt-2 text-xs text-gray-500">
              Accepted formats: PDF, PNG, JPG (max 25MB)
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-900">
            Notes (Optional)
          </label>
          <textarea
            name="notes"
            id="notes"
            rows={3}
            className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Any specific details or requirements..."
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isUploading}
            className="flex-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Processing...' : 'Create Estimate'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
