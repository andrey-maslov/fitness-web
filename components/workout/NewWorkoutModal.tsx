import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { NewWorkoutForm } from '@/components/workout/NewWorkoutForm'
import { MongoIdType } from '@/types/types'

interface Props {
  cycleId: MongoIdType | null
}

export const NewWorkoutModal = ({ cycleId }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="cyan" variant='outline'>Add workout</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            <span>Add workout</span>
            {cycleId ? ' to training cycle' : ' without training cycle'}
          </DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <NewWorkoutForm cycleId={cycleId} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
