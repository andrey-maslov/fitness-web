'use client'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { activityOptions } from '@/config/calculators.config'
import { calculateCalories } from '@/lib/calculateCalories'
import { DayCaloriesResult } from '@/components/calculators/day-calories/DayCaloriesResult'
import { DevTool } from '@hookform/devtools'

export default function DayCaloriesCalculator() {
  const form = useForm({
    defaultValues: {
      gender: 'male',
      age: null,
      weight: null,
      height: null,
      activity: 'sedentary',
      method: 'mifflin',
      bodyFat: null,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    void form.trigger()
  }, [])

  const [showResult, setShowResult] = useState(false)

  const values = form.watch()

  const onSubmit = () => {
    setShowResult(true)
  }

  const results = calculateCalories(values as any)

  // console.log(form.formState?.values)

  return (
    <>
      <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label>Пол</Label>
            <RadioGroup
              value={values.gender}
              onValueChange={(v) =>
                form.setValue('gender', v as 'male' | 'female', {
                  shouldValidate: true,
                })
              }
            >
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='male' id='male' />
                <Label className='mb-2' htmlFor='male'>
                  Мужской
                </Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='female' id='female' />
                <Label className='mb-2' htmlFor='female'>
                  Женский
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label className='mb-2'>Возраст</Label>
            <Input
              type='number'
              placeholder='Введите возраст'
              {...form.register('age', {
                required: 'Введите возраст',
                min: { value: 10, message: 'Минимальный возраст — 10 лет' },
                max: { value: 100, message: 'Максимальный возраст — 100 лет' },
              })}
            />
          </div>
          <div>
            <Label className='mb-2'>Вес (кг)</Label>
            <Input
              type='number'
              placeholder='Введите вес в кг'
              {...form.register('weight', {
                required: 'Введите вес',
                min: { value: 30, message: 'Минимальный вес — 30 кг' },
                max: { value: 200, message: 'Максимальный вес — 200 кг' },
              })}
            />
          </div>
          <div>
            <Label className='mb-2'>Рост (см)</Label>
            <Input
              type='number'
              placeholder='Введите рост в см'
              {...form.register('height', {
                required: 'Введите рост',
                min: { value: 100, message: 'Минимальный рост — 100 см' },
                max: { value: 250, message: 'Максимальный рост — 250 см' },
              })}
            />
          </div>
          <div className='col-span-2'>
            <Label>Уровень активности</Label>
            <select
              className='w-full border rounded p-2'
              {...form.register('activity', {
                required: 'Выберите уровень активности',
              })}
            >
              {activityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='mt-4'>
          <Label className='mb-2'>Процент жира (опционально)</Label>
          <Input
            type='number'
            step='0.1'
            placeholder='Введите процент жира'
            {...form.register('bodyFat')}
          />
        </div>

        <div className='mt-4'>
          <Label className='mb-2'>Формула расчета</Label>
          <RadioGroup
            value={values.method}
            onValueChange={(v) =>
              form.setValue('method', v as 'mifflin' | 'katch', {
                shouldValidate: true,
              })
            }
            className='flex gap-4'
          >
            <div className='flex items-center gap-2'>
              <RadioGroupItem value='mifflin' id='mifflin' />
              <Label className='mb-2' htmlFor='mifflin'>
                Mifflin-St Jeor
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <RadioGroupItem value='katch' id='katch' />
              <Label className='mb-2' htmlFor='katch'>
                Katch-McArdle
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className='flex gap-4'>
          <Button type='submit' disabled={!form.formState.isValid}>
            Рассчитать
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              form.reset()
              setShowResult(false)
            }}
          >
            Сбросить
          </Button>
        </div>
      </form>

      <DevTool control={form.control} placement='top-left' />

      {showResult && form.formState.isValid && results && (
        <div className='mt-8'>
          <DayCaloriesResult results={results} method={values.method} />
        </div>
      )}
    </>
  )
}
