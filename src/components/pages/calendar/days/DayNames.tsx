import { FC } from 'react'

import styles from './CalendarDays.module.scss'
import { getDayNames } from '@/helpers/calendar.helper'

const DayNames: FC = () => {
  const dayNames = getDayNames()

  return (
    <div className={styles.day_names}>
      {dayNames.name_short.map(dayName => (
        <h4 key={dayName}>{dayName}</h4>
      ))}
    </div>
  )
}

export default DayNames
