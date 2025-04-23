import {
  BicepsFlexed,
  ChartColumnBig,
  Flame,
  LucideFootprints,
  LucideDroplets,
  LucideUtensils,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CalculatorsSectionButton } from '@/components/landing/CalculatorsSectionButton'

export const calculators = [
  {
    icon: BicepsFlexed,
    type: '1rm',
    title: '1RM — максимум на 1 повтор',
    description:
      'Узнай, какой вес ты можешь поднять за один раз. Быстро, безопасно и без необходимости пробовать вживую.',
    href: '/calc/1rm',
  },
  {
    icon: Flame,
    type: 'day-calories',
    title: 'Калории в день',
    description:
      'Рассчитай, сколько калорий тебе нужно в день для похудения, поддержания или набора массы — с учётом активности и целей.',
    href: '/calc/day-calories',
  },
  {
    icon: ChartColumnBig,
    type: 'bmi',
    title: 'BMI — индекс массы тела',
    description:
      'Узнай свой ИМТ и получи оценку состояния массы тела по шкале ВОЗ: от дефицита до ожирения.',
    href: '/calc/bmi',
  },
  {
    icon: LucideFootprints,
    type: 'ffmi',
    title: 'FFMI — индекс мышечной массы',
    description:
      'Определи, насколько развито твоё тело с учётом роста и процента жира. Подходит для оценки натуралов.',
    href: '/calc/ffmi',
  },
  {
    icon: LucideDroplets,
    type: 'water',
    title: 'Потребление воды',
    description:
      'Рассчитай, сколько воды нужно пить ежедневно — в зависимости от массы тела и активности.',
    href: '/calc/water',
  },
  {
    icon: LucideUtensils,
    type: 'macros',
    title: 'Распределение БЖУ',
    description:
      'Сбалансируй белки, жиры и углеводы в зависимости от цели: похудение, набор или поддержание.',
    href: '/calc/macros',
  },
]

export default function CalculatorsSection() {
  return (
    <>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold'>Доступные калькуляторы</h2>
        <p className='text-muted-foreground mx-auto max-w-2xl'>
          Онлайн-калькуляторы, которые помогут вам тренироваться эффективнее,
          питаться осознанно и достигать целей быстрее.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {calculators.map((item) => (
          <Card
            key={item.title}
            // className='flex flex-col gap-6 rounded-xl py-6 shadow-sm'
          >
            <CardHeader>
              <div className='p-2 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4'>
                <item.icon className='text-primary' size={36} />
              </div>
              <CardTitle className='leading-none font-semibold'>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground text-base'>
              {item.description}
            </CardContent>
            <CardFooter>
              <CalculatorsSectionButton url={item.href} type={item.type} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
