import { ChevronUp } from 'lucide-react'

interface Props {
  bmi: number
}

export const BmiScaleBar = ({ bmi }: Props) => {
  return (
    <div className='relative w-full h-16 rounded flex text-xs text-white font-medium'>
      <div className='flex-[18.5] bg-blue-400 flex items-center justify-center'>
        Дефицит
      </div>
      <div className='flex-[6.4] bg-green-500 flex items-center justify-center'>
        Норма
      </div>
      <div className='flex-[5] bg-yellow-400 flex items-center justify-center'>
        Изб. вес
      </div>
      <div className='flex-[10] bg-red-500 flex items-center justify-center'>
        Ожирение
      </div>

      <div
        className='absolute -bottom-5 text-muted-foreground'
        style={{ left: `${(Math.min(bmi, 45) / 45) * 100}%` }}
        title={`Ваш BMI: ${bmi.toFixed(1)}`}
      >
        <ChevronUp className='text-2xl' />
      </div>
    </div>
  )
}
