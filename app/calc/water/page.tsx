import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Script from 'next/script'
import WaterCalculator from '@/components/calculators/water/WaterCalculator'

const title = `Калькулятор нормы воды — ${siteConfig.name}`
const description =     'Быстро рассчитайте вашу оптимальную суточную норму воды на основе веса и активности. Удобный онлайн калькулятор воды от MakeMeStrong.'
const url = `${siteConfig.url}/calc/water`

  export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'калькулятор воды',
    'сколько пить воды',
    'норма воды в сутки',
    'питьевой режим',
    'MakeMeStrong',
  ],
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

export default function WaterPage() {
  return (
    <div>
      <div className='prose max-w-2xl mx-auto mt-8'>
        <h2>Что делает этот калькулятор?</h2>
        <p>
          Калькулятор нормы воды помогает определить оптимальное количество
          жидкости, которое следует выпивать ежедневно для поддержания здоровья,
          энергии и нормального обмена веществ. Рекомендации основаны на вашем
          весе и уровне физической активности.
        </p>
        <h3>Почему важно следить за потреблением воды?</h3>
        <p>
          Недостаток воды в организме может привести к снижению
          работоспособности, ухудшению состояния кожи, нарушению пищеварения и
          другим проблемам со здоровьем. Правильный питьевой режим способствует
          улучшению метаболизма, повышению выносливости и ускорению
          восстановления после тренировок.
        </p>
        <p>
          Рассчитайте свою суточную норму воды и сделайте шаг к улучшению
          самочувствия и спортивных результатов!
        </p>

        <WaterCalculator />
      </div>
      <Script id='jsonld-water-calculator' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Калькулятор нормы воды',
          description,
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
