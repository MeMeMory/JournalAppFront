import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { daySlice } from './slices/day.slice'
import { monthSlice } from './slices/month.slice'
import { yearSlice } from './slices/year.slice'
import { userSlice } from './user/user.slice'

const persistConfig: PersistConfig<unknown> = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  year: yearSlice.reducer,
  month: monthSlice.reducer,
  day: daySlice.reducer,
  user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
