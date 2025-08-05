/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Typography,
  Box,
  Button
} from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../redux-hooks/hooks';
import { resetTodos } from '../features/todoSlice';
import { lazy } from 'react';

const ListRendering = lazy(() => import('./TodoComponents/ListRendering'));
const ModalTodo = lazy(() => import('./TodoComponents/ModalTodo'));

type Props = {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
};

const TodoApp = React.memo(({toggleTheme, mode}: Props) => {
    const dispatch = useAppDispatch();

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
              <Button variant="outlined" color="error" onClick={() => dispatch(resetTodos())}>
                Reset
              </Button>
            </Box>
          </Box>
          
          <ListRendering/>
        </Container>

    );
}, (prevProps, nextProps) => prevProps.mode === nextProps.mode);

export default TodoApp