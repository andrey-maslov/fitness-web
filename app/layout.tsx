import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { PagesLayout } from '@/components/layouts/PagesLayout'
import { siteConfig } from '@/config/site'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const locale = await getLocale()
  // next-intl SSG https://medium.com/@pilniczek/next-intl-with-next-15-ssg-c374a7241ad8
  const locale = 'ru'

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans `}
      >
        <PagesLayout>{children}</PagesLayout>
      </body>
    </html>
  )
}
