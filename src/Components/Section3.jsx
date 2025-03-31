import React from 'react';
import { Box, Container, Typography, useTheme, useScrollTrigger } from '@mui/material';

const Section3 = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const gradient = isDarkMode 
    ? 'linear-gradient(45deg, #5c6bc0, #9fa8da)' 
    : 'linear-gradient(45deg, #1a237e, #3949ab)';

  return (
    <Container>
      <Box 
        sx={{
          backgroundColor: 'light blue', 
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(97, 218, 251, 0.1)',
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            marginBottom: '16px', 
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            color: '#2c3e50' 
          }}
        >
          Perks
        </Typography>

        <Typography variant="body1" sx={{ color: '#34495e', lineHeight: '1.8', fontSize: '16px' }}>
          <ul>
            <li>1 Lakh cash prize pool for winning teams!</li>
            <li>Lunch and dinner on April 18th, and breakfast on April 19th will be provided.</li>
            <li>Refreshments will be available throughout the event.</li>
            <li>Participation certificates for all.</li>
            <li>Internship and job opportunities (including PPOs) at the discretion of partnering companies.</li>
            <li>Potential collaboration opportunities with companies to further develop your project.</li>
            <li>Networking opportunities with industry leaders, startup founders, and AI experts.</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default Section3;
