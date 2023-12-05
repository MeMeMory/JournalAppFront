import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { daySlice } from '@/store/slices/day.slice'
import { monthSlice } from '@/store/slices/month.slice'
import { yearSlice } from '@/store/slices/year.slice'

const rootActions = {
  ...yearSlice.actions,
  ...monthSlice.actions,
  ...daySlice.actions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
