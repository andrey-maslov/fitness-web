import Script from 'next/script'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export async function generateStaticParams() {
  return [{}]
}

const title = `Правила использования - ${siteConfig.name}`
const description =
  'Условия использования сервиса MakeMeStrong: цели, ограничения, сбор данных и юридическая информация.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [],
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${siteConfig.url}/terms-of-use`,
    images: [siteConfig.ogImages.default],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/terms-of-use`,
  },
}

export default async function TermsPage() {
  return (
    <div className='prose max-w-2xl mx-auto'>
      <div>
        <h1>Пользовательское соглашение</h1>

        <p>
          <strong>Дата вступления в силу:</strong> 24 апреля 2025
        </p>

        <p>
          Настоящее Пользовательское соглашение (далее — «Соглашение»)
          регулирует условия использования веб-сервиса{' '}
          <strong>MakeMeStrong</strong> (далее — «Сервис»), доступного по адресу{' '}
          <a href='https://makemestrong.fit'>https://www.makemestrong.fit</a>.
        </p>

        <h2>1. Общие положения</h2>
        <p>
          Используя Сервис, вы соглашаетесь с условиями настоящего Соглашения.
          Если вы не согласны с какими-либо из условий — пожалуйста, прекратите
          использование Сервиса.
        </p>

        <h2>2. Назначение сервиса</h2>
        <p>
          MakeMeStrong предоставляет пользователям доступ к фитнес-калькуляторам
          и инструментам, предназначенным для справочных и образовательных
          целей. Сервис не является медицинским продуктом и не заменяет
          консультацию с врачом или специалистом.
        </p>

        <h2>3. Ограничение ответственности</h2>
        <p>
          Сервис предоставляет информацию «как есть» и не гарантирует точность,
          полноту или пригодность для конкретных целей. Владелец Сервиса не
          несёт ответственности за любые последствия, возникшие в результате
          использования данных, полученных через Сервис.
        </p>

        <h2>4. Сбор и хранение данных</h2>
        <p>Сервис может собирать следующие данные:</p>
        <ul>
          <li>
            Email-адрес пользователя (в случае добровольной подписки на
            рассылку);
          </li>
          <li>
            Обезличенную статистику использования (через{' '}
            <a href='https://plausible.io'>Plausible Analytics</a>).
          </li>
        </ul>
        <p>
          Данные не передаются третьим лицам и используются исключительно для
          улучшения работы Сервиса и обратной связи с пользователями.
        </p>

        <h2>5. Интеллектуальная собственность</h2>
        <p>
          Все материалы, размещённые на сайте, включая тексты, изображения,
          визуализации и логотипы, принадлежат владельцу Сервиса и не могут
          использоваться без письменного разрешения.
        </p>

        <h2>6. Изменения условий</h2>
        <p>
          Администрация оставляет за собой право изменять условия Соглашения в
          любое время без предварительного уведомления. Актуальная версия
          доступна на этой странице.
        </p>

        <h2>7. Контакты</h2>
        <p>
          Если у вас есть вопросы, предложения или жалобы, пожалуйста, свяжитесь
          с нами по адресу:{' '}
          <a href='mailto:support@makemestrong.fit'>support@makemestrong.fit</a>
        </p>
      </div>
      <Script id='jsonld-1rm' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description,
          url: `${siteConfig.url}/terms-of-use`,
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
