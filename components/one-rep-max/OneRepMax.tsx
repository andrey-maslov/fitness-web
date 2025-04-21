'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { OneRepMaxBarChart } from '@/components/one-rep-max/OneRepMaxBarChart'

const formulas = {
  epley: {
    name: 'Epley',
    description: '1RM = вес × (1 + повторения ÷ 30)',
    calculate: (weight: number, reps: number) => weight * (1 + reps / 30),
  },
  brzycki: {
    name: 'Brzycki',
    description: '1RM = вес × 36 ÷ (37 - повторения)',
    calculate: (weight: number, reps: number) => weight * (36 / (37 - reps)),
  },
  lander: {
    name: 'Lander',
    description: '1RM = 100 × вес ÷ (101.3 - 2.67123 × повторения)',
    calculate: (weight: number, reps: number) =>
      (100 * weight) / (101.3 - 2.67123 * reps),
  },
  oconner: {
    name: "O'Conner",
    description: '1RM = вес × (1 + 0.025 × повторения)',
    calculate: (weight: number, reps: number) => weight * (1 + 0.025 * reps),
  },
}

const weightDefault = 60
const repsDefault = 5

export default function OneRepMax() {
  const [weight, setWeight] = useState(weightDefault)
  const [reps, setReps] = useState(repsDefault)
  const [chartFormula, setChartFormula] = useState<keyof typeof formulas>('epley');
  const base1RM = formulas[chartFormula].calculate(weight, reps);
  const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

  return (
    <div>
      <div className='grid gap-4 sm:grid-cols-2 mb-8'>
        <div>
          <Label>Вес (кг)</Label>
          <Input
            type='number'
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            min={1}
          />
        </div>
        <div>
          <Label>Повторения</Label>
          <Input
            type='number'
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
            min={1}
            max={12}
          />
        </div>

      </div>

      <div className='flex flex-wrap gap-2 items-center  mb-8'>
        <Label>Формула для графика:</Label>
        {Object.entries(formulas).map(([key, f]) => (
          <Button
            key={key}
            variant={chartFormula === key ? 'default' : 'outline'}
            onClick={() => setChartFormula(key as keyof typeof formulas)}
            size='sm'
          >
            {f.name}
          </Button>
        ))}
      </div>

      <div className='space-y-4  mb-8'>
        <h2 className='text-xl font-semibold'>Ваш максимум на 1 повтор по разным формулам</h2>
        <ul className='space-y-1'>
          {Object.entries(formulas).map(([key, f]) => {
            const value = f.calculate(weight, reps);
            return (
              <li key={key}>
                <div>
                  <strong>{f.name}:</strong> <span className='font-medium'>{Math.round(value)} кг</span>
                </div>
                <div className='text-sm text-muted-foreground'>{f.description}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>{`Значения в процентах от максимума на 1 повтор (${chartFormula})`}</h2>
        <ul className='space-y-1'>
          {percentages.map((p) => (
            <li key={p}>
              {p}%: <span className='font-medium'>{Math.round(base1RM * (p / 100))} кг</span>
            </li>
          ))}
        </ul>

        <OneRepMaxBarChart base1RM={base1RM} percentages={percentages} />
      </div>
    </div>
  )
}
