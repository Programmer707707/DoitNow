import './App.css'
import TodoApp from './apps/TodoApp'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: { default: '#f9fafb' },
            primary: { main: '#1976d2' },
          }
        : {
            background: { default: '#121212' },
            primary: { main: '#90caf9' },
          }),
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todos' element={<TodoApp toggleTheme={toggleTheme} mode={mode} />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
