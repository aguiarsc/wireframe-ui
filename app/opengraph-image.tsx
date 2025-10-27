import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'wireframe-ui - Wireframe Components for Rapid Prototyping'
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(to bottom right, #000 0%, #1a1a1a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 20,
              letterSpacing: '-0.05em',
            }}
          >
            wireframe-ui
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#a1a1aa',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Skip Figma. Build mockups directly in your IDE with copy-paste wireframe components.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 60,
              gap: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 28,
                color: '#71717a',
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  border: '2px solid #71717a',
                }}
              />
              React
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 28,
                color: '#71717a',
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  border: '2px solid #71717a',
                }}
              />
              Tailwind CSS
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 28,
                color: '#71717a',
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  border: '2px solid #71717a',
                }}
              />
              shadcn/ui
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
