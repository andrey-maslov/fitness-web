import { Metadata } from 'next';
import { BmiCalculator } from '@/components/bmi/BmiCalculator'
import { siteConfig } from '@/config/site'
import Script from 'next/script'

export const metadata: Metadata = {
  title: `Калькулятор BMI – Индекс массы тела онлайн - ${siteConfig.name}`,
  description: 'Онлайн-калькулятор индекса массы тела (BMI). Введите рост и вес, чтобы узнать свой ИМТ и соответствующую категорию: норма, недостаток или избыточный вес.',
  keywords: ['BMI', 'ИМТ', 'индекс массы тела', 'вес', 'норма веса', 'ожирение', 'недостаток веса'],
  openGraph: {
    title: `Калькулятор BMI - Индекс массы тела - ${siteConfig.name}`,
    description: 'Узнай свой индекс массы тела (BMI) и категорию веса по стандартной шкале ВОЗ.',
    type: 'website',
    url: `${siteConfig.url}/calc/bmi`,
    images: [siteConfig.ogImages.default],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Калькулятор BMI',
    description: 'Рассчитайте индекс массы тела (BMI) онлайн. Введите рост и вес, чтобы узнать свою категорию.',
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/calc/bmi`,
  },
};

export default function BmiPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Калькулятор BMI (ИМТ)</h1>
        <p className="text-muted-foreground">
          BMI (ИМТ) — это показатель, используемый для оценки соответствия массы тела росту. Используется для предварительной оценки риска заболеваний, связанных с весом.
        </p>
      </section>
      <section>
        <BmiCalculator />
      </section>

      <Script id="jsonld-bmi" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Калькулятор BMI",
          "description": "Рассчитайте индекс массы тела (BMI) онлайн. Введите рост и вес, чтобы узнать свою категорию.",
          "url": `${siteConfig.url}/calc/bmi`,
          "publisher": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
          }
        })}
      </Script>
    </main>
  );
}
