import cn from 'clsx'
import { FC } from 'react'

import styles from './Calendar.module.scss'
import CalendarMonth from './month/CalendarMonth'
import CalendarYear from './year/CalendarYear'

interface CalendarProps {
  schema: 'dark' | 'light'
}

const Calendar: FC<CalendarProps> = ({ schema }) => {
  return (
    <div
      className={cn(styles.datepicker, {
        [styles.dark]: schema === 'dark',
        [styles.light]: schema === 'light'
      })}
    >
      <CalendarYear />
      <CalendarMonth />
    </div>
  )
}

export default Calendar
