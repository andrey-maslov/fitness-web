'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [height, setHeight] = useState<number | null>(null)
  const [neck, setNeck] = useState<number | null>(null)
  const [waist, setWaist] = useState<number | null>(null)
  const [hip, setHip] = useState<number | null>(null)
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    if (!height || !neck || !waist || (gender === 'female' && !hip)) return

    const log10 = (x: number) => Math.log10(x)

    let bodyFat = 0

    if (gender === 'male') {
      bodyFat = 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76
    } else {
      bodyFat = 163.205 * log10(waist + hip! - neck) - 97.684 * log10(height) - 78.387
    }

    setResult(bodyFat)
  }

  const handleReset = () => {
    setHeight(null)
    setNeck(null)
    setWaist(null)
    setHip(null)
    setResult(null)
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <Card className="p-6 space-y-4">
        <h1 className="text-xl font-semibold">Калькулятор процента жира</h1>

        <div className="space-y-2">
          <Label>Пол</Label>
          <RadioGroup value={gender} onValueChange={(v) => setGender(v as 'male' | 'female')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Мужчина</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Женщина</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Рост (см)</Label>
          <Input
            type="number"
            value={height ?? ''}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="Введите рост"
          />
        </div>

        <div className="space-y-2">
          <Label>Обхват шеи (см)</Label>
          <Input
            type="number"
            value={neck ?? ''}
            onChange={(e) => setNeck(Number(e.target.value))}
            placeholder="Введите обхват шеи"
          />
        </div>

        <div className="space-y-2">
          <Label>Обхват талии (см)</Label>
          <Input
            type="number"
            value={waist ?? ''}
            onChange={(e) => setWaist(Number(e.target.value))}
            placeholder="Введите обхват талии"
          />
        </div>

        {gender === 'female' && (
          <div className="space-y-2">
            <Label>Обхват бедер (см)</Label>
            <Input
              type="number"
              value={hip ?? ''}
              onChange={(e) => setHip(Number(e.target.value))}
              placeholder="Введите обхват бедер"
            />
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleCalculate} disabled={!height || !neck || !waist || (gender === 'female' && !hip)}>
            Рассчитать
          </Button>
          <Button variant="outline" onClick={handleReset}>
            Сбросить
          </Button>
        </div>

        {result !== null && (
          <div className="text-center text-lg font-semibold mt-4">
            Ваш процент жира: <br />
            <span className="text-primary">{result.toFixed(1)}%</span>
          </div>
        )}
      </Card>
    </div>
  )
}
