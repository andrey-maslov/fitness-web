// Пример моковых данных для TrainingCycle и Workout

// Моковые данные для TrainingCycle
export const mockTrainingCycles = [
  {
    _id: 'cycle1',
    userId: 'user1',
    trainerId: 'trainer1',
    title: '4-недельный цикл на набор массы',
    comment:
      'Цикл, направленный на увеличение мышечной массы с постепенным ростом веса.',
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-04-28'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'cycle2',
    userId: 'user1',
    trainerId: 'trainer1',
    title: '8-недельный цикл выносливости',
    comment: 'Фокус на улучшении выносливости и общей физической подготовке.',
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-06-26'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

// Моковые данные для Workout, включая упражнения и подходы
export const mockWorkouts = [
  {
    _id: 'workout1',
    cycleId: 'cycle1', // Тренировка привязана к тренировочному циклу
    userId: 'user1',
    trainerId: 'trainer1',
    date: new Date('2024-04-03'),
    title: 'Грудь + Бицепс',
    comment: 'Хорошая тренировка, отлично проработаны мышцы груди и рук.',
    exercises: [
      {
        name: 'Жим штанги лежа',
        comment: 'Основное упражнение для груди.',
        sets: [
          { reps: 15, weight: 40 },
          { reps: 12, weight: 50 },
          { reps: 10, weight: 55 },
          { reps: 8, weight: 60 },
        ],
      },
      {
        name: 'Сгибание рук с гантелями',
        comment: 'Базовое упражнение для бицепсов.',
        sets: [
          { reps: 12, weight: 15 },
          { reps: 10, weight: 17 },
          { reps: 8, weight: 20 },
        ],
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'workout2',
    cycleId: 'cycle1',
    userId: 'user1',
    trainerId: 'trainer1',
    date: new Date('2024-04-10'),
    title: 'Ноги и спина',
    comment: 'Фокус на приседаниях и тягах. Хорошая динамика.',
    exercises: [
      {
        name: 'Приседания со штангой',
        comment: 'Классика для ног.',
        sets: [
          { reps: 12, weight: 60 },
          { reps: 10, weight: 70 },
          { reps: 8, weight: 80 },
        ],
      },
      {
        name: 'Тяга верхнего блока',
        comment: 'Укрепление спины.',
        sets: [
          { reps: 15, weight: 40 },
          { reps: 12, weight: 45 },
          { reps: 10, weight: 50 },
        ],
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'workout3',
    cycleId: null, // Спонтанная тренировка без привязки к циклу
    userId: 'user1',
    trainerId: null,
    date: new Date('2024-04-15'),
    title: 'Домашняя тренировка',
    comment: 'Спонтанная тренировка, проведённая дома с собственным весом.',
    exercises: [
      {
        name: 'Отжимания',
        comment: 'Классические отжимания для груди.',
        sets: [
          { reps: 20, weight: 0 },
          { reps: 15, weight: 0 },
        ],
      },
      {
        name: 'Планка',
        comment: 'Статическое упражнение для кора.',
        sets: [
          { reps: 1, weight: 0 }, // можно использовать reps для указания продолжительности (например, 1 минута)
        ],
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'workout4',
    cycleId: 'cycle2',
    userId: 'user1',
    trainerId: 'trainer1',
    date: new Date('2024-05-05'),
    title: 'Кардио + выносливость',
    comment:
      'Тренировка для улучшения выносливости, с упором на кардионагрузку.',
    exercises: [
      {
        name: 'Бег на дорожке',
        comment: '30 минут на умеренной скорости.',
        sets: [
          { reps: 1, weight: 0 }, // reps можно использовать как индикатор активности (например, количество минут)
        ],
      },
      {
        name: 'Эллиптический тренажёр',
        comment: 'Для разнообразия кардиотренировки.',
        sets: [{ reps: 1, weight: 0 }],
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
