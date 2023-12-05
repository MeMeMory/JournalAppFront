interface IFullMonth {
  year: number
  month: IMonth
}

type filterDaysType = {
  days: number[]
  next: boolean
  prev: boolean
}

export type filterMonth = {
  day: number
  next: boolean
  prev: boolean
}

export interface IMonth {
  name: string
  name_short: string
  number: number
  selected?: boolean
}

export function getMonths() {
  const fullNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const shortNames = fullNames.map(name => name.slice(0, 3))

  const numbers = Array.from({ length: 12 }, (_, index) => index)

  return {
    name: fullNames,
    name_short: shortNames,
    number: numbers
  }
}

export function getDayNames() {
  const weekdaysShort: string[] = []
  const weekdaysLong: string[] = []

  const currentDate = new Date()

  for (let i = 5; i < 12; i++) {
    currentDate.setDate(i + 1)
    weekdaysShort.push(
      currentDate.toLocaleDateString('en-US', { weekday: 'short' })
    )
    weekdaysLong.push(
      currentDate.toLocaleDateString('en-US', { weekday: 'long' })
    )
  }

  return { name_short: weekdaysShort, name_full: weekdaysLong }
}

export function getCurDate() {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = +currentDate.getMonth().toString().padStart(2, '0')
  const day = +currentDate.getDate().toString().padStart(2, '0')
  const monthName = new Date(year, month).toLocaleString('en-us', {
    month: 'long'
  })
  const monthShort = new Date(year, month).toLocaleString('en-us', {
    month: 'short'
  })

  return {
    year: year,
    month: month,
    day: day,
    month_name: monthName,
    month_short: monthShort
  }
}

export function getDaysMix({ year, month }: IFullMonth) {
  const curMonthDays = getDaysNumbers(year, month.number)
  const nextMonthDays = getDaysNumbers(year, month.number + 1)
  const prevMonthDays = getDaysNumbers(year, month.number - 1)

  const firstDayOfWeek = new Date(year, month.number, 1).getDay()

  const prevDays =
    firstDayOfWeek === 0
      ? prevMonthDays.slice(prevMonthDays.length - 6)
      : prevMonthDays.slice(prevMonthDays.length - firstDayOfWeek + 1)

  const nextDays = nextMonthDays.slice(
    0,
    42 - (prevDays.length + curMonthDays.length)
  )

  const composMonth: filterMonth[] = []

  composMonth.push(...filterDays({ days: prevDays, next: false, prev: true }))
  composMonth.push(
    ...filterDays({ days: curMonthDays, next: false, prev: false })
  )
  composMonth.push(...filterDays({ days: nextDays, next: true, prev: false }))

  return composMonth
}

function getDaysNumbers(year: number, monthNumber: number) {
  let daysInMonth: number

  if (monthNumber === 13) {
    daysInMonth = new Date(year + 1, 1, 0).getDate()
  } else if (monthNumber === 0) {
    daysInMonth = new Date(year - 1, 12, 0).getDate()
  } else {
    daysInMonth = new Date(year, monthNumber + 1, 0).getDate()
  }

  const days: number[] = []

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  return days
}

function filterDays({ days, next, prev }: filterDaysType) {
  const data = []

  days.map(day => {
    data.push({
      day: day,
      next: next,
      prev: prev
    })
  })

  return data
}
