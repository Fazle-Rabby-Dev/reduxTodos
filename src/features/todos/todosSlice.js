import { createSlice } from '@reduxjs/toolkit'; 

// const initialState = {
//   value: ,
// }

 const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
      addTodos: (state, action) => {
        state.push({
            text:action.payload
        })
      }
  }
})

export const { addTodos } = todosSlice.actions

export default todosSlice.reducer 