'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { BmiScaleBar } from '@/components/calculators/bmi/BmiScaleBar'
import { useEffect, useState } from 'react'
import { usePlausible } from 'next-plausible'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const bmiSchema = z.object({
  weight: z.coerce.number().min(30).max(200).nullable(),
  height: z.coerce.number().min(100).max(250).nullable(),
})

type BmiForm = {
  weight: number | null
  height: number | null
}

const getBmiCategory = (bmi: number) => {
  if (bmi < 16) return 'Выраженный дефицит массы тела'
  if (bmi < 18.5) return 'Недостаточная масса тела'
  if (bmi < 25) return 'Норма'
  if (bmi < 30) return 'Избыточная масса тела'
  if (bmi < 35) return 'Ожирение I степени'
  if (bmi < 40) return 'Ожирение II степени'
  return 'Ожирение III степени'
}

const getBmiDescription = (bmi: number) => {
  if (bmi < 18.5)
    return 'Ваш вес ниже нормы. Рекомендуется проконсультироваться со специалистом по питанию или врачом.'
  if (bmi < 25)
    return 'Ваш вес в пределах нормы. Продолжайте поддерживать активный образ жизни и сбалансированное питание!'
  if (bmi < 30)
    return 'Есть небольшое превышение массы тела. Рекомендуется уделить внимание физической активности и питанию.'
  return 'Ваш индекс массы тела указывает на ожирение. Рекомендуется проконсультироваться с врачом для составления безопасного плана коррекции веса.'
}

export const BmiCalculator = () => {
  const plausible = usePlausible()
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    plausible('calc_open', { props: { type: 'bmi' } })
  }, [])

  const form = useForm<BmiForm>({
    resolver: zodResolver(bmiSchema),
    defaultValues: {
      weight: null,
      height: null,
    },
    mode: 'onChange',
  })

  const values = form.watch()
  const heightMeters = values.height ? values.height / 100 : null
  const bmi =
    heightMeters && values.weight
      ? values.weight / (heightMeters * heightMeters)
      : null
  const category = bmi ? getBmiCategory(bmi) : ''

  const onSubmit = () => {
    setShowResult(true)
    plausible('calc_submit', { props: { type: 'bmi' } })
  }

  return (
    <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Label className='mb-2'>Вес (кг)</Label>
          <Input type='number' {...form.register('weight')} />
        </div>
        <div>
          <Label className='mb-2'>Рост (см)</Label>
          <Input type='number' {...form.register('height')} />
        </div>
      </div>
      <div className='flex gap-4'>
        <Button type='submit' disabled={!form.formState.isValid}>
          Рассчитать
        </Button>
        <Button
          type='button'
          onClick={() => {
            form.reset()
            setShowResult(false)
          }}
          variant='outline'
        >
          Сбросить
        </Button>
      </div>
      {showResult && bmi && (
        <>
          <Card
            className={cn(
              'shadow-xs bg-gradient-to-t from-primary/5 to-card dark:bg-card',
              bmi < 18.5
                ? 'bg-blue-100 border-blue-300'
                : bmi < 25
                  ? 'bg-green-100 border-green-300'
                  : bmi < 30
                    ? 'bg-yellow-100 border-yellow-300'
                    : 'bg-red-100 border-red-300'
            )}
          >
            <CardHeader className='relative'>
              <CardDescription className='text-md'>
                Ваш индекс массы тела (BMI):{' '}
              </CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums'>
                <span className='text-primary font-black'>
                  {bmi.toFixed(1)}
                </span>
              </CardTitle>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1 text-sm'>
              <div className='mb-4'>
                Категория: <strong>{category}</strong>
              </div>
              <div className='text-muted-foreground'>
                {getBmiDescription(bmi)}
              </div>
            </CardFooter>
          </Card>

          <BmiScaleBar bmi={bmi} />

          <div className='text-muted-foreground text-sm space-y-1'>
            <p>
              <strong>&lt; 16:</strong> выраженный дефицит массы тела
            </p>
            <p>
              <strong>16–18.4:</strong> недостаточная масса тела
            </p>
            <p>
              <strong>18.5–24.9:</strong> норма
            </p>
            <p>
              <strong>25–29.9:</strong> избыточная масса тела
            </p>
            <p>
              <strong>30–34.9:</strong> ожирение I степени
            </p>
            <p>
              <strong>35–39.9:</strong> ожирение II степени
            </p>
            <p>
              <strong>&gt;= 40:</strong> ожирение III степени
            </p>
          </div>
        </>
      )}
    </form>
  )
}
