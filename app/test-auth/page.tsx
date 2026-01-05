'use client'

import { useState } from 'react'

export default function TestAuthPage() {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function testSignup() {
    setLoading(true)
    try {
      const response = await fetch('/api/test-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test' + Date.now() + '@example.com',
          password: 'testpassword123',
        }),
      })
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (err) {
      setResult('Error: ' + (err instanceof Error ? err.message : 'Unknown'))
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Auth Connection Test</h1>

        <button
          onClick={testSignup}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          {loading ? 'Testing...' : 'Test Signup'}
        </button>

        {result && (
          <pre className="bg-white p-4 rounded border text-xs overflow-auto">
            {result}
          </pre>
        )}
      </div>
    </div>
  )
}
