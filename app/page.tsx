import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Script from 'next/script'

export const metadata: Metadata = {
  title: `${siteConfig.name} – Фитнес-калькуляторы онлайн`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: ['фитнес', 'калькулятор', 'калории', '1ПМ', 'ИМТ', 'тренировки', 'здоровье'],
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

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Фитнес-калькуляторы онлайн</h1>
        <p className="text-lg text-muted-foreground">
          Рассчитай одноповторный максимум (1RM), индекс массы тела (BMI), норму калорий и другие показатели быстро и удобно.
        </p>
        <Button asChild>
          <Link href="#calculators">Перейти к калькуляторам</Link>
        </Button>
      </section>

      {/* Calculators Section */}
      <section id="calculators" className="space-y-6">
        <h2 className="text-2xl font-semibold">Доступные калькуляторы</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-medium">💪 1RM — максимум на 1 повтор</h3>
              <p className="text-sm text-muted-foreground">
                Узнай максимальный вес, который ты можешь поднять за один подход.
              </p>
              <Button asChild size="sm">
                <Link href="/calc/1rm">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-medium">🔥 Калории в день</h3>
              <p className="text-sm text-muted-foreground">
                Рассчёт базового обмена веществ (BMR) и суточной нормы.
              </p>
              <Button size="sm">
                <Link href="/calc/day-calories">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-medium">📊 BMI — индекс массы тела</h3>
              <p className="text-sm text-muted-foreground">
                Оцени своё соотношение массы и роста.
              </p>
              <Button size="sm">
                <Link href="/calc/bmi">Перейти</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why not ChatGPT Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Почему калькулятор, а не ChatGPT?</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>⚡ Быстрее — результат за 2 секунды</li>
          <li>📏 Точнее — по конкретной формуле</li>
          <li>🧠 Понятнее — никаких лишних объяснений</li>
          <li>🙋 Удобнее — легко показать клиенту</li>
        </ul>
      </section>

      {/* Subscribe section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Уведомить о запуске новых калькуляторов</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Ваш email" className="max-w-sm" />
          <Button>Подписаться</Button>
        </div>
      </section>

      <Script id="jsonld-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          }
        })}
      </Script>
    </main>
  );
}
