import { NextRequest, NextResponse } from 'next/server'

import { homePageMarkdown, homePageMarkdownTokens } from '@/lib/markdown'

const homeLinkHeaders = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</llms.txt>; rel="service-doc"; type="text/plain"',
  '</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
  '</index.md>; rel="alternate"; type="text/markdown"',
]

const HOME_PATHS = ['/', '/index', '/index.html']

export function middleware(request: NextRequest) {
  if (!HOME_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  const acceptHeader = (request.headers.get('accept') || '').toLowerCase()
  const markdownPreference = getQuality(acceptHeader, 'text/markdown')
  const htmlPreference = Math.max(
    getQuality(acceptHeader, 'text/html'),
    getQuality(acceptHeader, 'application/xhtml+xml'),
    getQuality(acceptHeader, '*/*')
  )
  const wantsMarkdown = markdownPreference > 0 && markdownPreference >= htmlPreference

  if (wantsMarkdown) {
    const markdownResponse = new NextResponse(homePageMarkdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'X-Markdown-Tokens': homePageMarkdownTokens,
        Vary: 'Accept',
      },
    })

    applyLinkHeaders(markdownResponse)
    return markdownResponse
  }

  const response = NextResponse.next()
  applyLinkHeaders(response)
  response.headers.set('Vary', appendVary(response.headers.get('Vary'), 'Accept'))
  return response
}

export const config = {
  matcher: ['/', '/index', '/index.html'],
}

function applyLinkHeaders(response: NextResponse) {
  homeLinkHeaders.forEach((value) => {
    response.headers.append('Link', value)
  })
}

function appendVary(existing: string | null, value: string) {
  if (!existing) return value
  const parts = existing
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean)

  if (!parts.includes(value.toLowerCase())) {
    parts.push(value)
  }

  return parts.join(', ')
}

function getQuality(acceptHeader: string, mediaType: string) {
  return acceptHeader
    .split(',')
    .map((entry) => entry.trim())
    .reduce((best, entry) => {
      if (!entry) return best

      const [type, ...params] = entry.split(';').map((part) => part.trim())
      if (!matchesMediaType(type, mediaType)) return best

      const qualityParam = params.find((param) => param.startsWith('q='))
      const quality = qualityParam ? Number.parseFloat(qualityParam.slice(2)) : 1
      const score = Number.isFinite(quality) ? quality : 0

      return Math.max(best, score)
    }, 0)
}

function matchesMediaType(candidate: string, target: string) {
  if (candidate === target) return true
  if (candidate === '*/*') return true

  const [candidateType, candidateSubType] = candidate.split('/')
  const [targetType, targetSubType] = target.split('/')

  if (candidateSubType === '*' && candidateType === targetType) return true

  return candidateType === targetType && (candidateSubType === targetSubType || targetSubType === '*')
}
