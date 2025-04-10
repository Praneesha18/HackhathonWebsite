// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Footer from './Components/Footer';
import Section5 from './Components/Section5';
import createAppTheme from './theme';



function App() {
  // State for managing theme mode, defaulting to 'dark'
  const [mode, setMode] = useState('dark');
  
  // Create the theme based on current mode
  const theme = createAppTheme(mode);
  
  // Toggle theme function to pass to Navbar
  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default'
        }}
      >
        <Navbar toggleTheme={toggleTheme} currentTheme={mode} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4/>
          <Section5/>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;