import type { Metadata } from 'next'
import Script from 'next/script'
import BodyFatCalculator from '@/components/calculators/body-fat/BodyFatCalculator'
import { siteConfig } from '@/config/site'
import { BodyFatTable } from '@/components/calculators/body-fat/BodyFatTable'

const title = `Калькулятор процента жира — ${siteConfig.name}`
const description = 'Рассчитайте процент жира в организме по обхватам шеи, талии и бедер. Узнайте свой состав тела быстро и точно с калькулятором MakeMeStrong.'
const url = `${siteConfig.url}/calc/body-fat`

export const metadata: Metadata = {
  title,
  description,
  keywords: ['процент жира', 'расчет процента жира', 'формула U.S. Navy', 'состав тела', 'MakeMeStrong'],
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    images: [siteConfig.ogImages.default],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(siteConfig.url),
}

export default function BodyFatPage() {
  return (
    <div>
      <BodyFatCalculator />

      <div className="prose max-w-2xl mx-auto mt-8">
        <h2>Что делает этот калькулятор?</h2>
        <p>
          Калькулятор процента жира позволяет быстро и удобно оценить состав тела, используя обмеры шеи, талии и бедер.
          Формула U.S. Navy предлагает приближенное значение процента жира без необходимости проходить сложные лабораторные тесты.
        </p>
        <h3>Почему важно знать свой процент жира?</h3>
        <p>
          Понимание процента жира в организме помогает объективно отслеживать прогресс тренировок, корректировать питание и строить эффективные планы достижения целей —
          будь то снижение веса, набор мышечной массы или поддержание здоровья.
        </p>
        <p>
          Регулярный мониторинг состава тела важен для тех, кто стремится к функциональному и гармоничному развитию своего тела.
        </p>

        <BodyFatTable />
      </div>

      <Script id="jsonld-body-fat-calculator" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Калькулятор процента жира',
          description: 'Рассчитайте процент жира в организме по обхватам шеи, талии и бедер с помощью калькулятора MakeMeStrong.',
          url,
          inLanguage: 'ru',
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        })}
      </Script>
    </div>
  )
}
