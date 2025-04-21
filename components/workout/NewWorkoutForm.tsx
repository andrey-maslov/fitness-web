"use client"

import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { SetsField } from '@/components/workout/SetsField'

const workoutSchema = z.object({
  date: z.string().nonempty('Выберите дату'),
  title: z.string().min(1, 'Название обязательно'),
  comment: z.string().optional(),
  exercises: z
    .array(
      z.object({
        name: z.string().min(1, 'Введите упражнение'),
        comment: z.string().optional(),
        sets: z
          .array(
            z.object({
              reps: z.number().min(1),
              weight: z.number().min(0),
            })
          )
          .min(1, 'Добавьте хотя бы один подход'),
      })
    )
    .min(1, 'Добавьте хотя бы одно упражнение'),
})

export type WorkoutFormValues = z.infer<typeof workoutSchema>

export function NewWorkoutForm() {
  const form = useForm<WorkoutFormValues>({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      date: '',
      title: '',
      comment: '',
      exercises: [{ name: '', comment: '', sets: [{ reps: 0, weight: 0 }] }],
    },
  })

  const {
    fields: exFields,
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({ control: form.control, name: 'exercises' })

  function onSubmit(data: WorkoutFormValues) {
    console.log('Workout:', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {/* Workout-level */}
        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата</FormLabel>
              <FormControl>
                <Input type='date' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название тренировки</FormLabel>
              <FormControl>
                <Input placeholder='Ноги' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*We can enable it further*/}
        {/*<FormField*/}
        {/*  control={form.control}*/}
        {/*  name='comment'*/}
        {/*  render={({ field }) => (*/}
        {/*    <FormItem>*/}
        {/*      <FormLabel>Комментарий</FormLabel>*/}
        {/*      <FormControl>*/}
        {/*        <Textarea placeholder='Как прошло...' {...field} />*/}
        {/*      </FormControl>*/}
        {/*      <FormMessage />*/}
        {/*    </FormItem>*/}
        {/*  )}*/}
        {/*/>*/}

        {/* Exercise-level */}
        {exFields.map((ex, exIndex) => (
          <div key={ex.id} className='p-4 border rounded space-y-4'>
            {/* Название упражнения */}
            <FormField
              control={form.control}
              name={`exercises.${exIndex}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>#{exIndex + 1}</FormLabel>
                  <FormControl>
                    <Input placeholder='Жим лёжа' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Подходы */}
            <SetsField control={form.control} exerciseIndex={exIndex} />

            <Button
              variant='destructive'
              onClick={() => removeExercise(exIndex)}
            >
              Удалить упражнение
            </Button>
          </div>
        ))}

        <Button
          onClick={() =>
            appendExercise({
              name: '',
              comment: '',
              sets: [{ reps: 0, weight: 0 }],
            })
          }
        >
          Добавить упражнение
        </Button>

        <Button type='submit'>Сохранить тренировку</Button>
      </form>
    </Form>
  )
}
