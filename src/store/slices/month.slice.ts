import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IMonth } from '@/helpers/calendar.helper'

interface IMonthInitialState {
  month: IMonth
}

const initialState: IMonthInitialState = {
  month: null
}

export const monthSlice = createSlice({
  name: 'month',
  initialState,
  reducers: {
    setMonth: (state, action: PayloadAction<IMonth>) => {
      state.month = action.payload
    },
    resetMonth: state => {
      state.month = null
    }
  }
})
