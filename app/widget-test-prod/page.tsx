import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Widget Test (Prod)',
  robots: { index: false, follow: false },
}

export default function WidgetTestProdPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold">TII Widget Test (Production)</h1>
      <p className="mt-4 text-gray-600">
        Test page for the embedded TII chat widget against production. The chat bubble should
        appear in the bottom-right corner.
      </p>
      <script
        src="https://app.impactchat.app/widget.iife.js"
        data-api-base="https://app.impactchat.app"
        data-lang="th"
        defer
      />
    </main>
  )
}
