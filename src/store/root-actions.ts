import { daySlice } from './slices/day.slice'
import { monthSlice } from './slices/month.slice'
import { yearSlice } from './slices/year.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
  ...userActions,
  ...yearSlice.actions,
  ...monthSlice.actions,
  ...daySlice.actions
}
