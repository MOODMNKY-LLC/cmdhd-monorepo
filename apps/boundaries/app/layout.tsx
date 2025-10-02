import './globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@cmdhd/ui'
import { loadEnv } from '@cmdhd/env'

export const metadata = {
  title: 'CMDHD Professional Boundaries',
  description: 'Interactive training experience for CMDHD.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const env = loadEnv()
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-dvh">
            <header className="border-b border-black/10 dark:border-white/10">
              <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
                <span className="font-semibold">{env.NEXT_PUBLIC_SITE_NAME}</span>
              </div>
            </header>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
