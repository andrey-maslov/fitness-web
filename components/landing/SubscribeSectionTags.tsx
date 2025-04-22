'use client'
import { usePlausible } from 'next-plausible'
import { Button } from '@/components/ui/button'

const topics = [
  'Здоровье',
  'Сила и форма',
  'Прогресс',
  'Советы и гайды',
  'Мотивация',
  'Осознанность',
]

export const SubscribeSectionTags = () => {
  const plausible = usePlausible()

  return topics.map((topic) => (
    <Button
      key={topic}
      variant='outline'
      onClick={() =>
        plausible(`subscribe_section_tag_click`, { props: { name: topic } })
      }
    >
      {topic}
    </Button>
  ))
}
