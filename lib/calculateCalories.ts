import { activityFactors } from '@/config/calculators.config'
import { CalorieForm } from '@/components/day-calories/DayCaloriesCalculator'

export function calculateCalories(values: CalorieForm) {
  if (!values.age || !values.weight || !values.height || !values.activity)
    return null

  let bmr = 0
  const method = values.method || (values.bodyFat ? 'katch' : 'mifflin')
  const lbm = values.bodyFat
    ? values.weight * (1 - values.bodyFat / 100)
    : undefined

  if (method === 'katch' && lbm !== undefined) {
    bmr = 370 + 21.6 * lbm
  } else {
    const base = 10 * values.weight + 6.25 * values.height - 5 * values.age
    bmr = values.gender === 'male' ? base + 5 : base - 161
  }

  const totalCalories = Math.round(bmr * activityFactors[values.activity])
  const caloriesMaintain = totalCalories
  const caloriesCut = Math.round(totalCalories * 0.8)
  const caloriesBulk = Math.round(totalCalories * 1.2)
  const protein = Math.round(values.weight * 2)
  const fat = Math.round((totalCalories * 0.25) / 9)
  const carbs = Math.round((totalCalories - (protein * 4 + fat * 9)) / 4)

  return {
    bmr,
    totalCalories,
    caloriesMaintain,
    caloriesCut,
    caloriesBulk,
    protein,
    fat,
    carbs,
  }
}
