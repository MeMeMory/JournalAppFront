import cn from 'clsx'
import { FC, useEffect } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { useActions } from '@/hooks/useAction'
import { useCounter } from '@/hooks/useCounter'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './CalendarYear.module.scss'
import { getCurDate } from '@/helpers/calendar.helper'

const CalendarYear: FC = () => {
  const selectedMonth = useTypedSelector(state => state.month.month)

  const firstYear = 2020
  const lastYear = 2024

  const curYearData = getCurDate()

  const { count, increment, decrement } = useCounter({
    initVal: curYearData.year,
    minCount: firstYear,
    maxCount: lastYear
  })

  const { setYear, resetMonth } = useActions()

  const backToMonths = () => {
    resetMonth()
  }

  useEffect(() => {
    setYear(count)
  }, [count])

  return (
    <div className={styles.years}>
      <div className={styles.button} onClick={decrement}>
        <RiArrowLeftSLine size={30} color={'#a5b1ad'} />
      </div>
      <div className={cn(styles.head, selectedMonth ? styles.back : '')}>
        {selectedMonth ? (
          <p className={styles.month} onClick={backToMonths}>
            {selectedMonth.name},
          </p>
        ) : null}
        <p className={styles.year}>{count}</p>
      </div>
      <div className={styles.button} onClick={increment}>
        <RiArrowRightSLine size={30} color={'#a5b1ad'} />
      </div>
    </div>
  )
}

export default CalendarYear
