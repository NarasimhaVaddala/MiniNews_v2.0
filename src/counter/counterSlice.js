import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  imgurl: "",
  content: "",
  title: ""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    brief: (state, action) => {
      state.imgurl = action.payload.imgurl
      state.content = action.payload.content
      state.title = action.payload.title
    },
  },
})

// Action creators are generated for each case reducer function
export const { brief } = counterSlice.actions

export default counterSlice.reducer
