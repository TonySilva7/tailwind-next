import { Sidebar } from '@app/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next + TailWind CSS',
  description: 'Criado por Tony Silva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen lg:grid  lg:grid-cols-app">
          <Sidebar />
          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-4 lg:pb-12 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
