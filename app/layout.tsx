import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Simple full-stack boilerplate for prototyping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', marginBottom: '2rem' }}>
          <h1>Next.js Boilerplate</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}