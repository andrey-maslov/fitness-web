import { ChevronUp } from 'lucide-react'

interface Props {
  bmi: number
}

export const BmiScaleBar = ({ bmi }: Props) => {
  const maxBmi = 39.9
  const clampedBmi = Math.max(0, Math.min(bmi, maxBmi))
  const left = (clampedBmi / maxBmi) * 100

  return (
    <div className='relative w-full h-16 rounded flex text-xs text-white font-medium text-shadow-2xs'>
      <div className='flex-[18.5] bg-blue-400 flex items-center justify-center rounded-l-md'>
        Дефицит
      </div>
      <div className='flex-[6.4] bg-green-500 flex items-center justify-center'>
        Норма
      </div>
      <div className='flex-[5] bg-yellow-400 flex items-center justify-center'>
        Изб. вес
      </div>
      <div className='flex-[10] bg-red-500 flex items-center justify-center rounded-r-md'>
        Ожирение
      </div>

      <div
        className='absolute -bottom-5 text-muted-foreground'
        style={{ left: `${left}%`, transform: 'translateX(-50%)' }}
        title={`Ваш BMI: ${bmi.toFixed(1)}`}
      >
        <ChevronUp className='text-2xl' />
      </div>
    </div>
  )
}
