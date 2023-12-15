import cn from 'clsx'
import { FC, useEffect } from 'react'

import { useActions } from '@/hooks/useAction'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './CalendarDays.module.scss'
import DayNames from './DayNames'
import { filterMonth, getCurDate, getDaysMix } from '@/helpers/calendar.helper'

type CalendarProps = {
  monthName: string
}

const CalendarDays: FC<CalendarProps> = ({ monthName }) => {
  const selectedYear = useTypedSelector(state => state.year.date)
  const selectedMonth = useTypedSelector(state => state.month.month)

  const { setDay } = useActions()
  const selectedDay = useTypedSelector(state => state.day.day)

  const curYearData = getCurDate()

  const selectDay = (day: filterMonth) => setDay(day.day)

  useEffect(() => {
    setDay(curYearData.day)
  }, [])

  if (selectedMonth === undefined || selectedMonth === null) {
    return <div className={styles.days}></div>
  }

  const composMonth = getDaysMix({
    year: selectedYear,
    month: selectedMonth
  })

  return (
    <div className={cn(styles.days, monthName ? styles.show : '')}>
      <DayNames />
      <div className={styles.days_wrapper}>
        {composMonth.map((day, i) => (
          <div
            key={i}
            className={cn(
              styles.day,
              day.next || day.prev ? styles.day_hide : '',
              selectedDay == day.day && day.next === false && day.prev === false
                ? styles.selected
                : ''
            )}
            onClick={() => selectDay(day)}
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarDays
