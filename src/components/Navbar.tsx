import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={NavLink} to={'/'}>📋 Todo Manager</Typography>
        <Box>
          <Button component={NavLink} to="/" color="inherit">Home</Button>
          <Button component={NavLink} to="/about" color="inherit">About</Button>
          <Button component={NavLink} to="/todos" color="inherit">Todos</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
