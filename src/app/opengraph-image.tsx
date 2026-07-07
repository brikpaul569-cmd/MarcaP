import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0F1419 0%, #1A1F2E 50%, #0F1419 100%)',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00D9FF, #0088FF)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 16,
            letterSpacing: -1,
          }}
        >
          Brikman Paul Morales
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#E8EAED',
            letterSpacing: 0.5,
          }}
        >
          Software Architect & Electronic Composer
        </div>
      </div>
    ),
    { ...size },
  )
}
