import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Script from 'next/script'
import HeroSection from '@/components/landing/HeroSection'
import EmailForm from '@/components/landing/EmailForm'
import Features from '@/components/landing/Features'
import CTASection from '@/components/landing/CTASection'
import CalculatorsSection from '@/components/landing/CalculatorsSection'

export const metadata: Metadata = {
  title: `${siteConfig.name} – Фитнес-калькуляторы онлайн`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    'фитнес',
    'калькулятор',
    'калории',
    '1ПМ',
    'ИМТ',
    'тренировки',
    'здоровье',
  ],
  openGraph: {
    title: `${siteConfig.name} – Фитнес-калькуляторы`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
    images: [siteConfig.ogImages.default],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <main className=''>
      <HeroSection />

      <CalculatorsSection />

      <CTASection />

      {/* Why not ChatGPT Section */}
      <Features />

      {/* Subscribe section */}
      <EmailForm />

      <Script id='jsonld-home' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        })}
      </Script>
    </main>
  )
}
