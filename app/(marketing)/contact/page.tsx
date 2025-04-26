import Script from 'next/script'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { SubscriptionForm } from '@/components/SubscriptionForm'

const title = `Контакты - ${siteConfig.name}`
const description = 'Свяжитесь с командой MakeMeStrong для вопросов, предложений и обратной связи.'
const url = `${siteConfig.url}/contact`

export const metadata: Metadata = {
  title,
  description,
  keywords: [],
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

export default async function ContactPage() {
  return (
    <div className='prose max-w-2xl mx-auto'>
      <h1>Свяжитесь с нами</h1>
      <p>
        Если у вас есть вопросы о работе сервиса, предложения по улучшению или вы заметили ошибку —
        пожалуйста, напишите нам через форму ниже. Мы всегда рады обратной связи!
      </p>
      <p>
        Постараемся ответить вам как можно скорее.
      </p>
      <SubscriptionForm source="contact"/>
      <Script id='jsonld-1rm' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
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
