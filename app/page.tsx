import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Script from 'next/script'
import SubscribeSection from '@/components/landing/SubscribeSection'
import Features from '@/components/landing/Features'
import CalculatorsSection from '@/components/landing/CalculatorsSection'
import HeroSectionAlt from '@/components/landing/HeroSectionAlt'

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
      {/*<HeroSection />*/}
      <HeroSectionAlt />

      <section
        id='calculators'
        className='container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]'
      >
        <CalculatorsSection />
      </section>

      {/*<CTASection />*/}

      {/* Why not ChatGPT Section */}
      <section className='container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]'>
        <Features />
      </section>

      {/* Subscribe section */}
      <div id='subscribe'>
        <SubscribeSection />
      </div>

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
