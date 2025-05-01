import OneRepMax from '@/components/calculators/one-rep-max/OneRepMax'
import Script from 'next/script'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `Калькулятор 1ПМ (1RM) – Максимальный вес на одно повторение - ${siteConfig.name}`,
  description:
    "Удобный онлайн калькулятор 1ПМ (одноповторного максимума). Рассчитайте ваш 1RM по формуле Эпли, Бжицки, Лэндера и O'Коннора, а также получите таблицу % нагрузок.",
  keywords: [
    '1RM',
    '1ПМ',
    'фитнес калькулятор',
    'силовой тренинг',
    'максимальный вес',
    'Epley',
    'Brzycki',
    'Lander',
    'Oconner',
  ],
  openGraph: {
    title: `Калькулятор 1ПМ (1RM) - ${siteConfig.name}`,
    description:
      'Рассчитайте ваш одноповторный максимум по проверенным формулам. Таблица нагрузок, график, визуализация.',
    type: 'website',
    url: `${siteConfig.url}/calc/1rm`,
    images: [siteConfig.ogImages.oneRm],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Калькулятор 1ПМ (1RM)',
    description:
      "Удобный онлайн инструмент для расчета 1ПМ по формулам Эпли, Бжицки, Лэндера и O'Коннора.",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/calc/1rm`,
  },
}

export default function OneRepMaxPage() {
  return (
    <main className='max-w-2xl mx-auto'>
      <section className='space-y-4 mb-8'>
        <h1 className='text-3xl font-bold'>
          Калькулятор 1RM (максимум на 1 повтор)
        </h1>
        <p className='text-muted-foreground'>
          Калькулятор одноповторного максимума (1ПМ) помогает определить
          максимальный вес, который вы можете поднять один раз. Этот показатель
          используется для составления силовых программ: например, тренировка
          может предполагать работу с 75% от вашего 1ПМ.
        </p>
        <p className='text-muted-foreground'>
          <strong>Как использовать результат:</strong> большинство силовых
          программ указывают нагрузку в процентах от 1ПМ. Например, «3 подхода
          по 5 повторений с 80% от 1ПМ». Рассчитайте свой 1ПМ, а затем подберите
          нужную нагрузку по таблице ниже или графику.
        </p>
        <p className='text-muted-foreground'>
          Введите вес и количество повторений, чтобы рассчитать максимальный
          вес, который вы можете поднять за 1 повтор.
        </p>
      </section>

      <section className='space-y-4'>
        <OneRepMax />
      </section>
      <Script id='jsonld-1rm' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Калькулятор 1ПМ (1RM)',
          description:
            "Удобный онлайн калькулятор одноповторного максимума. Поддержка формул Epley, Brzycki, Lander и O'Conner. График и таблица % нагрузок.",
          url: `${siteConfig.url}/calc/1rm`,
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
