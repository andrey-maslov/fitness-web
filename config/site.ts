export const siteConfig = {
  name: 'MakeMeStrong',
  title: "MakeMeStrong - Фитнес-калькуляторы онлайн",
  description: 'Фитнес-калькуляторы и инструменты для улучшения тела и силы.',
  url: 'https://makemestrong.fit', // базовый домен

  author: {
    name: 'MakeMeStrong Team',
    url: 'https://makemestrong.fit',
  },

  links: {
    github: 'https://github.com/yourname/makemestrong',
    twitter: 'https://twitter.com/yourhandle',
    telegram: 'https://t.me/yourchannel',
  },

  ogImages: {
    default: '/og-default.jpg',
    oneRm: '/og-1rm_ru.jpg',
    bmi: '/og-bmi.jpg',
    dayCalories: '/day-calories.jpg',
  },

  navItemsTopMenu: [
    {
      label: '1RM — максимум на 1 повтор',
      href: '/calc/1rm',
    },
    {
      label: 'BMI — индекс массы тела',
      href: '/calc/bmi',
    },
    {
      label: 'Калории на день',
      href: '/calc/day-calories',
    }
  ],

  footerNavMenu: [
    {
      label: 'Правила',
      href: '/terms-of-use',
    },
    {
      label: 'Контакт',
      href: '/contact',
    },
  ]
}