import {useState, useMemo, useCallback} from 'react'
import {
  TextField,
  Checkbox,
  IconButton,
  Stack,
  Box,
  Typography
} from '@mui/material';
import { Delete, Edit, Save, Close } from '@mui/icons-material';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from '../../redux-hooks/hooks';
import { toggleTodo, editTodo, deleteTodo } from '../../features/todoSlice';

const ListRendering = () => {
    const dispatch = useAppDispatch() 
    const todos = useAppSelector((state) => state.todos.todos) 

    // Editing todo
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>('');

    // useMemo integrated
    const completedTodos = useMemo(() => todos.filter(t => t.done).length, [todos])
    
    const Editing = (id: number, currentText: string) => {
        setEditText(currentText);
        setEditingId(id);
    }
    const saveEdit = useCallback((id: number) => {
        dispatch(editTodo({id, newText: editText}));
        setEditText('');
        setEditingId(null);
    },[dispatch,editText]);


    return (
      <Box sx={{width: '50%', m: 'auto'}}>

        {/* Todo list */}
            <Stack spacing={2}>
              {todos.map(todo => (
                <Paper key={todo.id} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box display="flex" alignItems="center" gap={2} flex={1}>
                    <Checkbox
                      checked={todo.done}
                      onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    {editingId === todo.id ? (
                      <TextField fullWidth value={editText} onChange={(e) => setEditText(e.target.value)} />
                    ) : (
                      <Typography sx={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                        {todo.text}
                      </Typography>
                    )}
                  </Box>
                
                  <Box>
                    {editingId === todo.id ? (
                      <>
                        <IconButton onClick={() => saveEdit(todo.id)}><Save /></IconButton>
                        <IconButton onClick={() => setEditingId(null)}><Close /></IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton onClick={() => Editing(todo.id, todo.text)}><Edit /></IconButton>
                        <IconButton onClick={() => dispatch(deleteTodo(todo.id))}><Delete /></IconButton>
                      </>
                    )}
                  </Box>
                </Paper>
              ))}
            </Stack>

            {/* Todo list ending */}

            {completedTodos > 0 ?
            (
            <Paper elevation={1}>
                <Typography variant="h6"
                align="center"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mt: 4,
                  mb: 2,
                }} 
                className='text-5xl text-center text-blue-600 font-bold'>
                ✅ Completed: {completedTodos} • ⏳ Pending: {todos.length - completedTodos}
                </Typography>
            </Paper>)
            :
            (<></>)
            }
        </Box>
    )
}

export default ListRendering