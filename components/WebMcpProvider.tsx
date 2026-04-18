'use client'

import { useEffect } from 'react'

type WebMcpTool = {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  execute: (input: unknown) => unknown
}

type ModelContextNavigator = Navigator & {
  modelContext?: {
    provideContext: (context: { tools: WebMcpTool[] }) => void
  }
}

export default function WebMcpProvider() {
  useEffect(() => {
    const nav = navigator as ModelContextNavigator
    if (!nav.modelContext?.provideContext) return

    nav.modelContext.provideContext({
      tools: [
        {
          name: 'get_profile_summary',
          description:
            'Return a concise profile summary for Dr. Pattarapornd Suparcha.',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          execute: () => ({
            name: 'Dr. Pattarapornd Suparcha',
            location: 'Bangkok, Thailand',
            specialties: [
              'Aesthetic medicine',
              'Anti-aging medicine',
              'Preventive and regenerative wellness care',
            ],
            canonicalUrl: 'https://pattarapornd.com/',
          }),
        },
        {
          name: 'get_site_resources',
          description: 'Return key machine-readable discovery resources.',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          execute: () => ({
            robots: 'https://pattarapornd.com/robots.txt',
            sitemap: 'https://pattarapornd.com/sitemap.xml',
            llms: 'https://pattarapornd.com/llms.txt',
            apiCatalog: 'https://pattarapornd.com/.well-known/api-catalog',
            skillsIndex:
              'https://pattarapornd.com/.well-known/agent-skills/index.json',
          }),
        },
      ],
    })
  }, [])

  return null
}
