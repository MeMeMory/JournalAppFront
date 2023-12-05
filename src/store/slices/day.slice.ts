import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IDayInitialState {
  day: number
}

const initialState: IDayInitialState = {
  day: null
}

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<number>) => {
      state.day = action.payload
    },
    resetDay: state => {
      state.day = null
    }
  }
})
