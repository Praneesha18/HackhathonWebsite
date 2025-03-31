import React from 'react';
import { Box, Container, Typography, Link, Stack, Grid, Divider, useTheme, useMediaQuery } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Instructions', href: '#instructions' },
    { label: 'Perks', href: '#perks' }
  ];
  
  const socialIcons = [
    { icon: <FacebookIcon />, href: '#' },
    { icon: <TwitterIcon />, href: '#' },
    { icon: <LinkedInIcon />, href: '#' },
    { icon: <InstagramIcon />, href: '#' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.footer',
        py: { xs: 6, md: 8 },
        color: 'text.primary',
        borderTop: '3px solid',
        borderColor: 'primary.main',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(25, 118, 210, 0.1), transparent 60%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} justifyContent="space-between">
          {/* Logo and contact info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                mb: 3,
                position: 'relative',
                display: 'inline-block'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  pb: 1
                }}
              >
                Virtuora
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #2196F3, transparent)'
                }}
              />
            </Box>
            
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                maxWidth: '300px',
                color: 'text.secondary'
              }}
            >
              Transforming virtual experiences with cutting-edge technology and innovative solutions.
            </Typography>
            
            <Stack spacing={2}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'rgba(33, 150, 243, 0.1)',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <EmailIcon fontSize="small" color="primary" />
                </Box>
                <Typography variant="body2">contact@virtuora.com</Typography>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'rgba(33, 150, 243, 0.1)',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <PhoneIcon fontSize="small" color="primary" />
                </Box>
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'rgba(33, 150, 243, 0.1)',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <LocationOnIcon fontSize="small" color="primary" />
                </Box>
                <Typography variant="body2">123 Tech St, Silicon Valley, CA</Typography>
              </Box>
            </Stack>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: '40px',
                  height: '3px',
                  bgcolor: 'primary.main'
                }
              }}
            >
              Quick Links
            </Typography>
            
            <Stack spacing={2}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(10px)'
                    },
                    '&::before': {
                      content: '"›"',
                      marginRight: '8px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:hover::before': {
                      opacity: 1
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>
          
          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: '40px',
                  height: '3px',
                  bgcolor: 'primary.main'
                }
              }}
            >
              Stay Connected
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
              Follow us on social media for updates, tech news, and special offers.
            </Typography>
            
            <Stack direction="row" spacing={1}>
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    bgcolor: 'background.paper',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      boxShadow: '0 6px 12px rgba(33, 150, 243, 0.3)'
                    }
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', textAlign: { xs: 'center', sm: 'left' } }}
          >
            © {currentYear} <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Virtuora</Box>. All rights reserved.
          </Typography>
          
        </Box>
      </Container>
    </Box>
  );
}