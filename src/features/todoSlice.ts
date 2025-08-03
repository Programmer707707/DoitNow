import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

type Todo = {
    id: number
  text: string
  done: boolean
};

type TodoState = {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        done: false
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) todo.done = !todo.done
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<{ id: number; newText: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id)
      if (todo) todo.text = action.payload.newText
    },
    resetTodos: (state) => {
      state.todos = []
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, editTodo, resetTodos } = todoSlice.actions
export default todoSlice.reducer