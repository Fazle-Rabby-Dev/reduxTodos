// import { configureStore } from '@reduxjs/toolkit'
// import { todosSlice } from '../features/todos/todosSlice'

// export const store = configureStore({
//   reducer: {
//     todos: todosSlice
//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})
