import { Metadata } from 'next'
import DayCaloriesCalculator from '@/components/calculators/day-calories/DayCaloriesCalculator'
import { siteConfig } from '@/config/site'
import Script from 'next/script'

const title = `Калькулятор калорий – Норма калорий в день - ${siteConfig.name}`
const description =
  'Рассчитайте суточную норму калорий (BMR) с учётом пола, веса, роста, возраста и уровня активности. Онлайн калькулятор калорий для мужчин и женщин.'
const url = ''

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'калории в день',
    'норма калорий',
    'BMR',
    'калькулятор калорий',
    'метаболизм',
    'питание',
    'онлайн расчет',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    images: [siteConfig.ogImages.default],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: url,
  },
}

export default function DayCaloriesPage() {
  return (
    <main className='max-w-2xl mx-auto space-y-8'>
      <section className='space-y-4'>
        <h1 className='text-3xl font-bold'>Калькулятор калорий</h1>
        <p className='text-muted-foreground'>
          Рассчитайте свою суточную норму калорий в зависимости от возраста,
          пола, роста, веса и физической активности. Этот расчёт поможет вам
          поддерживать вес, худеть или набирать массу.
        </p>
      </section>
      <section>
        <DayCaloriesCalculator />
      </section>

      <Script id='jsonld-day-calories' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description,
          url,
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
