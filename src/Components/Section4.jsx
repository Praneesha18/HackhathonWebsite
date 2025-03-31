import React from 'react';
import { Box, Container, Typography, useTheme, useScrollTrigger } from '@mui/material';

const Section4 = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container>
      <Box 
        sx={{
          backgroundColor: 'light blue', // Light Blue
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(97, 218, 251, 0.1)',
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            color:'#34495e',
            marginBottom: '16px', 
            background: trigger 
              ? isDarkMode 
                ? 'linear-gradient(45deg, #5c6bc0, #9fa8da)' 
                : 'linear-gradient(45deg, #1a237e, #3949ab)' 
              : isDarkMode 
                ? 'linear-gradient(45deg, #5c6bc0, #9fa8da)' 
                : 'linear-gradient(45deg, #1a237e, #3949ab)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Instructions Manual
        </Typography>

        <Typography variant="body1" sx={{ color: '#34495e', lineHeight: '1.8', fontSize: '16px' }}>
          <ul>
            <li>The hackathon will run non-stop for 24 hours from April 18th, 9:00 AM to April 19th, 9:00 AM.</li>
            <li>Problem statements will be released 7-10 days in advance via the official WhatsApp group.</li>
            <li>The hackathon follows predefined themes, but participants can also work on open-theme projects or provided problem statements.</li>
            <li>Each team must have 3-5 members.</li>
            <li>Each team member must register individually.</li>
            <li>Participants must bring their own laptops and chargers.</li>
            <li>Internet will be provided, but teams are encouraged to have a hotspot as a backup.</li>
            <li>Accommodation is to be arranged by participants themselves.</li>
            <li>Judges' decisions are final and must be respected by all participants.</li>
            <li>Plagiarism is strictly prohibited — all projects must be original.</li>
            <li>Mentorship and technical support will be available throughout the event.</li>
            <li>Code of Conduct: Participants must maintain a professional, respectful, and collaborative environment. Any form of misconduct may lead to disqualification.</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
}

export default Section4;
