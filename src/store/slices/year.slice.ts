import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IYearInitialState {
  date: number
}

const initialState: IYearInitialState = {
  date: null
}

export const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.date = action.payload
    }
  }
})
