export type Locale = (typeof locales)[number]

export const locales = ['ru'] as const
export const defaultLocale: Locale = 'ru'
