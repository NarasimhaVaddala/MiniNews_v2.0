import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  news:[]
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    list: (state, action) => {
      state.news = action.payload.news
    },
  },
})

// Action creators are generated for each case reducer function
export const { list } = newsSlice.actions

export default newsSlice.reducer
