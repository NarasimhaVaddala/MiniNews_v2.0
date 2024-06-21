import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice.js'
import newsReducer from '../news/newsSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer
  },
})