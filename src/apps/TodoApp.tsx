/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Typography,
  Box,
  Button
} from '@mui/material';
import ListRendering from './TodoComponents/ListRendering';
import ModalTodo from './TodoComponents/ModalTodo';
import React from 'react';
import { useTodoStore } from '../store/todoStore';

type Props = {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
};

const TodoApp = React.memo(({toggleTheme, mode}: Props) => {

    const resetTodos = useTodoStore(state => state.resetTodos)


    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <Typography variant="h3" textAlign="center" gutterBottom fontWeight="bold">
            My Tasks
          </Typography>

          <Box display="flex" justifyContent="space-between" mb={3}>
            <ModalTodo/>
            <Box display="flex" gap={2}>
              <Button variant="contained" onClick={toggleTheme}>
                {mode === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
              <Button variant="outlined" color="error" onClick={resetTodos}>
                Reset
              </Button>
            </Box>
          </Box>
          
          <ListRendering/>
        </Container>

    );
}, (prevProps, nextProps) => prevProps.mode === nextProps.mode);

export default TodoApp