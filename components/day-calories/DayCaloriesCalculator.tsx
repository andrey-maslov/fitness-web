'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { MacroPieChart } from '@/components/day-calories/MacroPieChart'

const calorieSchema = z.object({
  gender: z.enum(['male', 'female']),
  age: z.coerce.number().min(10).max(100),
  weight: z.coerce.number().min(30).max(200),
  height: z.coerce.number().min(100).max(250),
  activity: z.enum(['sedentary', 'light', 'moderate', 'active', 'very_active']),
  bodyFat: z.coerce.number().min(3).max(60).optional(),
  method: z.enum(['mifflin', 'katch']).optional(),
})

type CalorieForm = z.infer<typeof calorieSchema>

const activityFactors = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
}

export default function DayCaloriesCalculator() {
  const form = useForm<CalorieForm>({
    resolver: zodResolver(calorieSchema),
    defaultValues: {
      gender: 'female',
      age: undefined,
      weight: undefined,
      height: undefined,
      activity: undefined,
      method: 'mifflin',
      bodyFat: undefined,
    },
  })

  const values = form.watch()

  const isValid = values.age && values.weight && values.height && values.activity && values.gender;

  let bmr = 0;
  if (isValid) {
    const method = values.method || (values.bodyFat ? 'katch' : 'mifflin');
    const lbm = values.bodyFat
      ? values.weight * (1 - values.bodyFat / 100)
      : undefined;

    if (method === 'katch' && lbm !== undefined) {
      bmr = 370 + 21.6 * lbm;
    } else {
      const base =
        10 * values.weight + 6.25 * values.height - 5 * values.age;
      bmr = values.gender === 'male' ? base + 5 : base - 161;
    }
  }

  const totalCalories = isValid ? Math.round(bmr * activityFactors[values.activity]) : 0;
  const caloriesMaintain = totalCalories;
  const caloriesCut = isValid ? Math.round(totalCalories * 0.8) : 0;
  const caloriesBulk = isValid ? Math.round(totalCalories * 1.2) : 0;

  const protein = isValid ? Math.round(values.weight * 2) : 0; // 2g per kg bodyweight
  const fat = isValid ? Math.round((totalCalories * 0.25) / 9) : 0;
  const carbs = isValid ? Math.round((totalCalories - (protein * 4 + fat * 9)) / 4) : 0;

  return (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Label>Пол</Label>
          <RadioGroup
            value={values.gender}
            onValueChange={(v) =>
              form.setValue('gender', v as 'male' | 'female')
            }
          >
            <div className='flex items-center gap-2'>
              <RadioGroupItem value='male' id='male' />
              <Label htmlFor='male'>Мужской</Label>
            </div>
            <div className='flex items-center gap-2'>
              <RadioGroupItem value='female' id='female' />
              <Label htmlFor='female'>Женский</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label>Возраст</Label>
          <Input type='number' {...form.register('age')} />
        </div>
        <div>
          <Label>Вес (кг)</Label>
          <Input type='number' {...form.register('weight')} />
        </div>
        <div>
          <Label>Рост (см)</Label>
          <Input type='number' {...form.register('height')} />
        </div>
        <div className='col-span-2'>
          <Label>Уровень активности</Label>
          <select
            className='w-full border rounded p-2'
            value={values.activity}
            onChange={(e) =>
              form.setValue(
                'activity',
                e.target.value as CalorieForm['activity']
              )
            }
          >
            <option value='sedentary'>Минимальный (сидячий образ жизни)</option>
            <option value='light'>Низкий (1–3 тренировки в неделю)</option>
            <option value='moderate'>Средний (3–5 тренировок в неделю)</option>
            <option value='active'>Высокий (6–7 тренировок в неделю)</option>
            <option value='very_active'>
              Очень высокий (2 тренировки в день)
            </option>
          </select>
        </div>
      </div>

      <div className='mt-4'>
        <Label>Процент жира (опционально)</Label>
        <Input
          type='number'
          step='0.1'
          {...form.register('bodyFat')}
          onChange={(e) => {
            const value = parseFloat(e.target.value)
            form.setValue('bodyFat', isNaN(value) ? undefined : value)
          }}
        />
      </div>

      <div className="mt-4">
        <Label>Формула расчета</Label>
        <RadioGroup
          value={values.method}
          onValueChange={(v) => form.setValue('method', v as 'mifflin' | 'katch')}
          className="flex gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="mifflin" id="mifflin" />
            <Label htmlFor="mifflin">Mifflin-St Jeor</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="katch" id="katch" />
            <Label htmlFor="katch">Katch-McArdle</Label>
          </div>
        </RadioGroup>
      </div>

      {isValid && (
        <>
          <div className='text-xl font-semibold'>
            Ваша норма калорий:{' '}
            <span className='text-primary'>{totalCalories} ккал</span>
          </div>

          <div className='text-sm text-muted-foreground'>
            Расчёт по формуле: <strong>{values.method === 'katch' ? 'Katch-McArdle' : 'Mifflin-St Jeor'}</strong>
          </div>
          <div className='space-y-4'>
            <div className='text-sm text-muted-foreground'>
              <p><strong>Поддержание:</strong> {caloriesMaintain} ккал</p>
              <p><strong>Похудение (–20%):</strong> {caloriesCut} ккал</p>
              <p><strong>Набор массы (+20%):</strong> {caloriesBulk} ккал</p>
            </div>

            <div className='text-sm text-muted-foreground'>
              <h3 className='font-semibold mb-1'>Рекомендации по БЖУ:</h3>
              <p><strong>Белки:</strong> {protein} г</p>
              <p><strong>Жиры:</strong> {fat} г</p>
              <p><strong>Углеводы:</strong> {carbs} г</p>
            </div>
          </div>
          <div className='max-w-xs mx-auto'>
            <MacroPieChart protein={protein} fat={fat} carbs={carbs} />
          </div>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Как использовать результат:</strong> эта цифра — ваша ориентировочная суточная норма калорий для поддержания текущего веса.</p>
            <p>Если вы хотите <strong>похудеть</strong>, рекомендуется создать дефицит ~10–20% от этой нормы.</p>
            <p>Если вы хотите <strong>набрать массу</strong>, наоборот, увеличьте потребление на ~10–20%.</p>
            <p>Не забудьте учитывать цели, тренировочный объём и индивидуальные особенности организма.</p>
          </div>
        </>
      )}
    </form>
  )
}
