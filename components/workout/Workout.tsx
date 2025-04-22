'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { getFormattedDate } from '@/lib/date'
import React from 'react'
import { Workout } from '@/types/types'

interface Props {
  workout: Workout
}

export const WorkoutComponent = ({ workout }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className='mb-2'>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <span className='text-lg'>{workout.title}</span>
            <CollapsibleTrigger asChild>
              <Button variant='ghost' size='sm'>
                <ChevronsUpDown className='h-4 w-4' />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </CardTitle>
          <CardDescription>
            {getFormattedDate(workout.date, 'medium')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CollapsibleContent>
            {workout.exercises.map((exercise) => (
              <div className='p-2'>
                <div className='font-bold'>{exercise.name}</div>
                <ul>
                  {exercise.sets.map((set) => (
                    <li>
                      <span>{set.reps}</span> x<span> {set.weight}</span> kg
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CollapsibleContent>
        </CardContent>
      </Collapsible>
    </Card>
  )
}
