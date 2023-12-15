import cn from 'clsx'
import { FC, useEffect, useState } from 'react'

import { useActions } from '@/hooks/useAction'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import CalendarDays from '../days/CalendarDays'

import styles from './CalendarMonth.module.scss'
import { getCurDate, getMonths } from '@/helpers/calendar.helper'

const CalendarMonth: FC = () => {
  const selectedMonth = useTypedSelector(state => state.month.month)

  const months = getMonths()

  const [isOpen, setIsOpen] = useState<string>()

  const { setMonth, resetDay } = useActions()

  const click = (name: string) => {
    const monthIndex = months.name_short.indexOf(name)
    const monthData = {
      name: months.name[monthIndex],
      name_short: months.name_short[monthIndex],
      number: months.number[monthIndex],
      selected: true
    }

    setMonth(monthData)
    setIsOpen(name)
    resetDay()
  }

  useEffect(() => {
    const curYearData = getCurDate()

    const monthData = {
      name: curYearData.month_name,
      name_short: curYearData.month_short,
      number: curYearData.month,
      selected: true
    }

    setIsOpen(curYearData.month_name)
    setMonth(monthData)
  }, [])

  return (
    <div className={styles.body}>
      <div className={cn(styles.months, selectedMonth ? styles.hide : '')}>
        {months.name_short.map(name => (
          <div
            key={name}
            className={isOpen === name && selectedMonth ? styles.open : ''}
            onClick={() => click(name)}
          >
            {name}
          </div>
        ))}
      </div>
      {open && <CalendarDays monthName={isOpen} />}
    </div>
  )
}

export default CalendarMonth
