import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//1c1c1c-darkblack
//4a4a4a-charcoal
//6d6d6d-gray
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#1c1c1c',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'flex', md: 'none' } }}
            
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Agenda
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instructions
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Perks
          </Typography>
          <Button sx={{backgroundColor:'#6d6d6d',color:'white',cursor:'pointer'}}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
