import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodoStore = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    deleteTodo: (id: number) => void;
    resetTodos: () => void;
};

export const useTodoStore = create<TodoStore>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (text) => set(state => ({ todos: [...state.todos, {id: Date.now(), text, done: false}] })),
            toggleTodo: (id) => set(state => ({ todos: state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo) })),
            editTodo: (id, newText) => set(state => ({ todos: state.todos.map(todo => todo.id === id ? {...todo, text: newText} : todo)})),
            deleteTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
            resetTodos: () => set({ todos: [] }),
        }),
        {name: 'todo-storage'}
    )
)