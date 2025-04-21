import {
  BicepsFlexed,
  ChartColumnBig,
  ArrowRightIcon,
  Flame,
  LucideFootprints,
  LucideDroplets,
  LucideUtensils
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    icon: BicepsFlexed,
    title: '1RM — максимум на 1 повтор',
    description: 'Узнай, какой вес ты можешь поднять за один раз. Быстро, безопасно и без необходимости пробовать вживую.',
    url: '/calc/1rm',
  },
  {
    icon: Flame,
    title: 'Калории в день',
    description: 'Рассчитай, сколько калорий тебе нужно в день для похудения, поддержания или набора массы — с учётом активности и целей.',
    url: '/calc/day-calories',
  },
  {
    icon: ChartColumnBig,
    title: 'BMI — индекс массы тела',
    description: 'Узнай свой ИМТ и получи оценку состояния массы тела по шкале ВОЗ: от дефицита до ожирения.',
    url: '/calc/bmi',
  },
  {
    icon: LucideFootprints,
    title: 'FFMI — индекс мышечной массы',
    description: 'Определи, насколько развито твоё тело с учётом роста и процента жира. Подходит для оценки натуралов.',
    url: '/calc/ffmi',
  },
  {
    icon: LucideDroplets,
    title: 'Потребление воды',
    description: 'Рассчитай, сколько воды нужно пить ежедневно — в зависимости от массы тела и активности.',
    url: '/calc/water',
  },
  {
    icon: LucideUtensils,
    title: 'Распределение БЖУ',
    description: 'Сбалансируй белки, жиры и углеводы в зависимости от цели: похудение, набор или поддержание.',
    url: '/calc/macros',
  }
]

export default function CalculatorsSection() {
  return (
    <section className='container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold'>Доступные калькуляторы</h2>
        <p className='text-muted-foreground mx-auto max-w-2xl'>
          Everything you need to get your work done efficiently and effectively.
          Built for developers, designed for success.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((item) => (
          <Card
            key={item.title}
            className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm'
          >
            <CardHeader>
              <div className='p-2 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4'>
                <item.icon className='text-orange-500' size="lg" />
              </div>
              <CardTitle className='leading-none font-semibold'>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground text-base'>
              {item.description}
            </CardContent>
            <CardFooter>
              <Button asChild size='sm' variant='ghost'>
                <Link href={item.url}>
                  Перейти <ArrowRightIcon />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
