'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function WaterCalculator() {
  const [weight, setWeight] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    if (!weight) return
    const baseWater = weight * 35 // мл
    const activeBonus = isActive ? weight * 5 : 0 // +5 мл на кг при активности
    const totalWaterMl = baseWater + activeBonus
    setResult(totalWaterMl / 1000) // переводим в литры
  }

  const handleReset = () => {
    setWeight(null)
    setIsActive(false)
    setResult(null)
  }

  return (
      <Card className='p-6 space-y-4'>
        <h1 className='text-xl font-semibold'>Калькулятор нормы воды</h1>

        <div className='space-y-2'>
          <Label>Ваш вес (кг)</Label>
          <Input
            type='number'
            min={10}
            max={300}
            value={weight ?? ''}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder='Введите вес'
          />
        </div>

        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='activity'
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
          <Label htmlFor='activity'>Учитывать активный образ жизни</Label>
        </div>

        <div className='flex gap-4'>
          <Button onClick={handleCalculate} disabled={!weight}>
            Рассчитать
          </Button>
          <Button variant='outline' onClick={handleReset}>
            Сбросить
          </Button>
        </div>

        {result && (
          <div className='text-center text-lg font-semibold mt-4'>
            Ваша рекомендованная норма воды: <br />
            <span className='text-primary'>
              {result.toFixed(2)} литра в день
            </span>
          </div>
        )}
      </Card>
  )
}
