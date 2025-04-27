'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'

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

export default function OneRepMax() {
  const [weight, setWeight] = useState<number | null>(null)
  const [reps, setReps] = useState<number | null>(null)
  const [chartFormula, setChartFormula] =
    useState<keyof typeof formulas>('epley')
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResult(true)
  }

  const base1RM =
    weight && reps ? formulas[chartFormula].calculate(weight, reps) : null
  const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50]

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid gap-4 sm:grid-cols-2 mb-8'>
          <div>
            <Label className='mb-2'>Вес (кг)</Label>
            <Input
              type='number'
              value={weight ?? ''}
              onChange={(e) => setWeight(Number(e.target.value))}
              min={1}
            />
          </div>
          <div>
            <Label className='mb-2'>Кол-во повторений</Label>
            <Input
              type='number'
              value={reps ?? ''}
              onChange={(e) => setReps(Number(e.target.value))}
              min={1}
              max={12}
            />
          </div>
        </div>

        <div className='flex gap-4 mb-8'>
          <Button type='submit' disabled={!weight || !reps}>
            Рассчитать
          </Button>
          <Button
            type='button'
            variant='outline'
            onClick={() => {
              setWeight(null)
              setReps(null)
              setShowResult(false)
            }}
          >
            Сбросить
          </Button>
        </div>
      </form>

      <div className='flex flex-wrap gap-2 items-center  mb-8'>
        <Label>Формула:</Label>
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

      {showResult && weight && reps ? (
        <>
          <div className='space-y-4 mb-8'>
            <h2 className='text-xl font-semibold'>
              Ваш максимум на 1 повтор по разным формулам
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {Object.entries(formulas).map(([key, f]) => {
                const value = f.calculate(weight, reps)
                return (
                  <Card
                    className='shadow-xs bg-gradient-to-t from-primary/5 to-card dark:bg-card'
                    key={key}
                  >
                    <CardHeader className='relative'>
                      <CardDescription>{f.name}</CardDescription>
                      <CardTitle className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
                        {Math.round(value)} кг
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex-col items-start gap-1 text-sm'>
                      <div className='text-muted-foreground'>
                        {f.description}
                      </div>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>{`Значения в процентах от максимума на 1 повтор (${formulas[chartFormula].name})`}</h2>
            <ul className='space-y-1'>
              {base1RM
                ? percentages.map((p) => (
                    <li key={p}>
                      {p}%:{' '}
                      <span className='font-medium'>
                        {Math.round(base1RM * (p / 100))} кг
                      </span>
                    </li>
                  ))
                : null}
            </ul>

            {/*<OneRepMaxBarChart base1RM={base1RM} percentages={percentages} />*/}
          </div>
        </>
      ) : null}
    </div>
  )
}
