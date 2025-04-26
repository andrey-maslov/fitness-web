import Script from 'next/script'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Политика конфиденциальности - ${siteConfig.name}`,
    description:
      'Узнайте, как сервис MakeMeStrong обрабатывает и защищает ваши персональные данные. Прозрачные условия и безопасность информации.',
    keywords: [],
    openGraph: {
      title: `Политика конфиденциальности - ${siteConfig.name}`,
      description:
        'Узнайте, как сервис MakeMeStrong обрабатывает и защищает ваши персональные данные. Прозрачные условия и безопасность информации.',
      type: 'website',
      url: `${siteConfig.url}/privacy-policy`,
      images: [siteConfig.ogImages.default],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Политика конфиденциальности',
      description:
        'Узнайте, как сервис MakeMeStrong обрабатывает и защищает ваши персональные данные. Прозрачные условия и безопасность информации.',
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `${siteConfig.url}/privacy-policy`,
    },
  }
}

export default async function PrivacyPage() {
  return (
    <div className='prose max-w-2xl mx-auto py-10 px-4 prose'>
      <h1>Политика конфиденциальности</h1>

      <p>
        <strong>Дата вступления в силу:</strong> 24 апреля 2025
      </p>

      <p>
        Настоящая Политика конфиденциальности описывает, как веб-сервис{' '}
        <strong>MakeMeStrong</strong> (далее — «Сервис») собирает, использует и
        защищает информацию пользователей.
      </p>

      <h2>1. Сбор информации</h2>
      <p>Сервис может собирать следующие данные:</p>
      <ul>
        <li>Email-адрес — при подписке на рассылку;</li>
        <li>
          Анонимная аналитика — через{' '}
          <a href='https://plausible.io' target='_blank'>
            Plausible Analytics
          </a>{' '}
          (без cookies, без идентификации личности).
        </li>
      </ul>

      <h2>2. Использование данных</h2>
      <p>Собранные данные используются исключительно для:</p>
      <ul>
        <li>Информирования о новых функциях и обновлениях;</li>
        <li>Улучшения интерфейса и качества сервиса.</li>
      </ul>

      <h2>3. Хранение и защита</h2>
      <p>
        Персональные данные хранятся в безопасной базе данных и не передаются
        третьим лицам. Email-адреса используются только по назначению
        (рассылка).
      </p>

      <h2>4. Отказ от ответственности</h2>
      <p>
        Пользователь принимает на себя ответственность за достоверность
        предоставляемых данных и их актуальность.
      </p>

      <h2>5. Контакты</h2>
      <p>
        Если у вас есть вопросы, пожалуйста, свяжитесь с нами:{' '}
        <a href='mailto:support@makemestrong.fit'>support@makemestrong.fit</a>
      </p>

      <Script id='jsonld-privacy-policy' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Политика конфиденциальности',
          description:
            'Условия сбора, хранения и использования персональных данных пользователей сервиса MakeMeStrong.',
          url: `${siteConfig.url}/privacy-policy`,
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
