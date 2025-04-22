import { Card, CardContent } from '@/components/ui/card'
import {
  RocketIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChartIcon,
} from 'lucide-react'

const features = [
  {
    icon: RocketIcon,
    title: 'Мгновенный результат',
    description: 'Рассчёт за доли секунды без диалога и уточнений',
    cardClass:
      'text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm relative overflow-hidden p-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Стандартизированные формулы',
    description: 'Прозрачные и проверенные методы расчёта, без «галлюцинаций»',
    cardClass:
      'text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm relative overflow-hidden p-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20',
  },
  {
    icon: ZapIcon,
    title: 'Максимальная простота',
    description: 'Ничего лишнего — только то, что нужно',
    cardClass:
      'text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm relative overflow-hidden p-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-orange-500/20 to-red-500/20',
  },
  {
    icon: BarChartIcon,
    title: 'Удобство для тренеров и клиентов',
    description: 'Идеально подходит для показа, объяснения и планирования',
    cardClass:
      'text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm relative overflow-hidden p-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20',
  },
]

export default function Features() {
  return (
    <>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold'>
          Почему калькулятор, а не ChatGPT?
        </h2>
        <p className='text-muted-foreground mx-auto max-w-2xl'>
          Наши калькуляторы дают быстрый и точный результат без лишних
          уточнений, ошибок и сложных диалогов. Всё наглядно, проверено и
          адаптировано под задачи фитнеса и здоровья.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {features.map((feature) => (
          <Card key={feature.title} className={feature.cardClass}>
            <CardContent className='space-y-2 p-6'>
              <feature.icon className='text-primary h-12 w-12' />
              <h3 className='font-bold'>{feature.title}</h3>
              <p className='text-muted-foreground text-sm'>
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
