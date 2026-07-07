import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: SITE_CONFIG.name,
      template: `%s — ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.tagline,
    metadataBase: new URL(SITE_CONFIG.url),
    ...overrides,
  }
}
