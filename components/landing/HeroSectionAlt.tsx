import { HeroSectionFigures } from '@/components/landing/HeroSectionFigures'
import { CheckCheck, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HeroButtons } from '@/components/landing/HeroButtons'

const features = [
  'Проверенные формулы расчёта',
  'Быстрые и понятные результаты',
  'Удобно для новичков и тренеров',
]

export default function HeroSectionAlt() {

  return (
    <>
      <div className='relative container mx-auto px-4 md:px-6 2xl:max-w-[1400px]'>
        <div className='grid gap-6 pt-12 pb-8 md:pt-16 md:pb-12 lg:grid-cols-2 lg:pt-20 lg:pb-16'>
          <div className='flex flex-col justify-center space-y-8'>
            <div>
              <a
                className='inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition'
                href='/#subscribe'
              >
                PRO версия - записаться в лист ожидания
                <span className='inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold'>
                  <ChevronRight size={24} />
                </span>
              </a>
            </div>
            <div>
              <h1 className='from-foreground to-foreground/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl'>
                Фитнес-калькуляторы онлайн
              </h1>
              <p className='text-muted-foreground mb-8 max-w-[85%] text-xl'>
                Рассчитай одноповторный максимум (1RM), индекс массы тела (BMI),
                норму калорий и другие показатели быстро и удобно.
              </p>
            </div>
            <ul className='text-primary'>
              {features.map((feature, i) => (
                <li
                  className='flex items-center gap-2 text-muted-foreground text-sm mb-4'
                  key={i}
                >
                  <CheckCheck size={20} /> {feature}
                </li>
              ))}
            </ul>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <HeroButtons />
            </div>
          </div>
          <HeroSectionFigures />
        </div>
      </div>
    </>
  )
}
