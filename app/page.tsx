import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Script from 'next/script'
import SubscribeSection from '@/components/landing/SubscribeSection'
import Features from '@/components/landing/Features'
import CalculatorsSection from '@/components/landing/CalculatorsSection'
import HeroSection from '@/components/landing/HeroSection'

export async function generateMetadata(): Promise<Metadata> {
  return {
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
}

export default function HomePage() {
  return (
    <>
      <section
        id='hero'
        className='container mx-auto md:px-6 2xl:max-w-[1400px]'
      >
        <HeroSection />
      </section>

      <section
        id='calculators'
        className='container mx-auto space-y-8 py-10 lg:py-24 md:px-6 2xl:max-w-[1400px]'
      >
        <CalculatorsSection />
      </section>

      {/*<CTASection />*/}

      {/* Why not ChatGPT Section */}
      <section className='container mx-auto space-y-8 py-10 lg:py-24 md:px-6 2xl:max-w-[1400px]'>
        <Features />
      </section>

      {/* Subscribe section */}
      <div
        id='subscribe'
        className='container mx-auto py-10 lg:py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]'
      >
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
    </>
  )
}
