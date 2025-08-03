/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Typography,
  Box,
  Button
} from '@mui/material';
import ListRendering from './TodoComponents/ListRendering';
import ModalTodo from './TodoComponents/ModalTodo';
import { todoReducer, type Todo } from './TodoComponents/TodoReducer';
import { useEffect, useReducer } from 'react';
import React from 'react';
import useLocalStorage from './customHooks/useLocalStorage';

type Props = {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
};

const TodoApp = React.memo(({toggleTheme, mode}: Props) => {
    const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos',[]);
    const [todos, dispatch] = useReducer(todoReducer, storedTodos);


    useEffect(()=>{if (todos.length > 0) {
          setStoredTodos(todos);
        } else {
          localStorage.removeItem('todos');
        }}, [todos])

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <Typography variant="h3" textAlign="center" gutterBottom fontWeight="bold">
            My Tasks
          </Typography>

          <Box display="flex" justifyContent="space-between" mb={3}>
            <ModalTodo todos={todos} dispatch={dispatch} />
            <Box display="flex" gap={2}>
              <Button variant="contained" onClick={toggleTheme}>
                {mode === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
              <Button variant="outlined" color="error" onClick={() => {
                dispatch({ type: 'RESET' });
                setStoredTodos([]);
                localStorage.removeItem('todos');
              }}>
                Reset
              </Button>
            </Box>
          </Box>
          
          <ListRendering todos={todos} dispatch={dispatch} />
        </Container>

    );
}, (prevProps, nextProps) => prevProps.mode === nextProps.mode);

export default TodoApp