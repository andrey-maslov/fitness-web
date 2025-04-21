import { Metadata } from 'next'
import DayCaloriesCalculator from '@/components/day-calories/DayCaloriesCalculator'
import { siteConfig } from '@/config/site'
import Script from 'next/script'

export const metadata: Metadata = {
  title: `Калькулятор калорий – Норма калорий в день (BMR + активность) - ${siteConfig.name}`,
  description:
    'Рассчитайте суточную норму калорий (BMR) с учётом пола, веса, роста, возраста и уровня активности. Онлайн калькулятор калорий для мужчин и женщин.',
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
    title: `Калькулятор калорий – Норма калорий в день - ${siteConfig.name}`,
    description:
      'Онлайн-калькулятор нормы калорий с учётом метаболизма и активности.',
    type: 'website',
    url: `${siteConfig.url}/calc/day-calories`,
    images: [siteConfig.ogImages.default],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Калькулятор калорий',
    description:
      'Рассчитайте суточную потребность в калориях для мужчин и женщин онлайн.',
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/calc/day-calories`,
  },
}

export default function DayCaloriesPage() {
  return (
    <main className='max-w-2xl mx-auto p-6 space-y-8'>
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
          name: 'Калькулятор калорий',
          description:
            'УРассчитайте суточную потребность в калориях для мужчин и женщин онлайн.',
          url: `${siteConfig.url}/calc/day-calories`,
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
