import { MacroPieChart } from '@/components/calculators/day-calories/MacroPieChart'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Props {
  results: Record<string, number>
  method: string | undefined
}

export const DayCaloriesResult = ({ results, method }: Props) => {
  return (
    <>
      <Card className='shadow-xs bg-gradient-to-t from-primary/5 to-card dark:bg-card'>
        <CardHeader className='relative'>
          <CardDescription className='text-md'>
            Ваша норма калорий
          </CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums'>
            <span className='text-primary font-black'>
              {results.totalCalories} ккал
            </span>
          </CardTitle>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1 text-sm'>
          <div className='text-sm text-muted-foreground mb-4'>
            Расчёт по формуле:{' '}
            <strong>
              {method === 'katch' ? 'Katch-McArdle' : 'Mifflin-St Jeor'}
            </strong>
          </div>
          <div className='text-sm text-muted-foreground space-y-3 mb-4'>
            <p>
              <strong>Поддержание:</strong> {results.caloriesMaintain} ккал
            </p>
            <p>
              <strong>Похудение (–20%):</strong> {results.caloriesCut} ккал
            </p>
            <p>
              <strong>Набор массы (+20%):</strong> {results.caloriesBulk} ккал
            </p>
          </div>

          <div className='text-sm text-muted-foreground space-y-3'>
            <h3 className='font-semibold mb-3'>Рекомендации по БЖУ:</h3>
            <p>
              <strong>Белки:</strong> {results.protein} г
            </p>
            <p>
              <strong>Жиры:</strong> {results.fat} г
            </p>
            <p>
              <strong>Углеводы:</strong> {results.carbs} г
            </p>
          </div>
        </CardFooter>
      </Card>

      <div className='max-w-xs mx-auto my-6'>
        <MacroPieChart
          protein={results.protein}
          fat={results.fat}
          carbs={results.carbs}
        />
      </div>
      <div className='space-y-2 text-muted-foreground text-sm'>
        <p>
          <strong>Как использовать результат:</strong> эта цифра — ваша
          ориентировочная суточная норма калорий для поддержания текущего веса.
        </p>
        <p>
          Если вы хотите <strong>похудеть</strong>, рекомендуется создать
          дефицит ~10–20% от этой нормы.
        </p>
        <p>
          Если вы хотите <strong>набрать массу</strong>, наоборот, увеличьте
          потребление на ~10–20%.
        </p>
        <p>
          Не забудьте учитывать цели, тренировочный объём и индивидуальные
          особенности организма.
        </p>
      </div>
    </>
  )
}
