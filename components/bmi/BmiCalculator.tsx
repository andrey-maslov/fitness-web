'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { BmiScaleBar } from '@/components/bmi/BmiScaleBar'
import { useEffect } from 'react'
import { usePlausible } from 'next-plausible'

const bmiSchema = z.object({
  weight: z.coerce.number().min(30).max(200),
  height: z.coerce.number().min(100).max(250),
})

type BmiForm = z.infer<typeof bmiSchema>

const getBmiCategory = (bmi: number) => {
  if (bmi < 16) return 'Выраженный дефицит массы тела'
  if (bmi < 18.5) return 'Недостаточная масса тела'
  if (bmi < 25) return 'Норма'
  if (bmi < 30) return 'Избыточная масса тела'
  if (bmi < 35) return 'Ожирение I степени'
  if (bmi < 40) return 'Ожирение II степени'
  return 'Ожирение III степени'
}

export const BmiCalculator = () => {
  const plausible = usePlausible()

  useEffect(() => {
    plausible('calc_open', { props: { type: 'bmi' } })
  }, [])

  const form = useForm<BmiForm>({
    resolver: zodResolver(bmiSchema),
    defaultValues: {
      weight: 0,
      height: 0,
    },
  })

  const values = form.watch()
  const heightMeters = values.height / 100
  const bmi = values.weight / (heightMeters * heightMeters)
  const category = getBmiCategory(bmi)

  return (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Label>Вес (кг)</Label>
          <Input type='number' {...form.register('weight')} />
        </div>
        <div>
          <Label>Рост (см)</Label>
          <Input type='number' {...form.register('height')} />
        </div>
      </div>
      {values.weight > 0 && values.height > 0 && (
        <>
          <div className='text-xl font-semibold'>
            Ваш BMI: <span className='text-primary'>{bmi.toFixed(1)}</span>
          </div>
          <div
            className={cn(
              'text-sm p-3 rounded border',
              bmi < 18.5
                ? 'bg-blue-100 border-blue-300'
                : bmi < 25
                  ? 'bg-green-100 border-green-300'
                  : bmi < 30
                    ? 'bg-yellow-100 border-yellow-300'
                    : 'bg-red-100 border-red-300'
            )}
          >
            Категория: <strong>{category}</strong>
          </div>

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
