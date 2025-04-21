import { useFieldArray, Control } from 'react-hook-form'
import type { WorkoutFormValues } from './NewWorkoutForm'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SetsFieldProps {
  control: Control<WorkoutFormValues>
  exerciseIndex: number
}

export function SetsField({ control, exerciseIndex }: SetsFieldProps) {
  const fieldName = `exercises.${exerciseIndex}.sets` as const
  const { fields, append, remove } = useFieldArray<
    WorkoutFormValues,
    typeof fieldName
  >({
    control,
    name: fieldName,
  })

  return (
    <div className='space-y-2'>
      <FormLabel>Подходы</FormLabel>
      {fields.map((set, setIndex) => (
        <div key={set.id} className='flex gap-2 items-end'>
          {/* Reps */}
          <FormField
            control={control}
            name={`exercises.${exerciseIndex}.sets.${setIndex}.reps`}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input type='number' placeholder='Повт.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Weight */}
          <FormField
            control={control}
            name={`exercises.${exerciseIndex}.sets.${setIndex}.weight`}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input type='number' placeholder='Вес кг' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant='outline' size='sm' onClick={() => remove(setIndex)}>
            ×
          </Button>
        </div>
      ))}

      <div className='flex gap-2'>
        <Button size='sm' onClick={() => append({ reps: 0, weight: 0 })}>
          Добавить подход
        </Button>
        <Button
          size='sm'
          onClick={() => {
            const last = fields[fields.length - 1]
            append({ reps: last.reps, weight: last.weight })
          }}
        >
          Дублировать последний
        </Button>
      </div>
    </div>
  )
}
