import {useState, useRef, useEffect, useCallback} from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
} from '@mui/material';
import { useTodoStore } from '../../store/todoStore';

const ModalTodo = () => {
    const addTodo = useTodoStore(state => state.addTodo);

    // Modal
    const [modalOpen, setModalOpen] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const [input, setInput] = useState<string>('');

    //Using useEffect and setTimeout to focus on input after 0.1 second
    useEffect(()=>{
        if(modalOpen){
            setTimeout(()=> inputRef.current?.focus(), 100)
        }
    }, [modalOpen])


    const addTodoHelper = useCallback(() => {
        if(input.trim()){
          addTodo(input);
          setInput('');
          setModalOpen(false);
        }

    },[input, addTodo])


  return (

        <Box>
            <Button variant="contained" onClick={() => setModalOpen(true)}>
              ➕ Add Todo
            </Button>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  p: 4,
                  boxShadow: 24,
                  minWidth: 350,
                }}
              >
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Add New Todo
                </Typography>
            
                <TextField
                  fullWidth
                  label="Todo text"
                  inputRef={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                <Box display="flex" justifyContent="flex-end" mt={3} gap={1}>
                  <Button variant="contained" onClick={() => {
                    addTodoHelper();
                    setModalOpen(false);
                  }}>
                    Save
                  </Button>
                  <Button variant="outlined" onClick={() => {
                    setModalOpen(false);
                    setInput('');
                  }}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Modal>

        </Box>
  )
};

export default ModalTodo