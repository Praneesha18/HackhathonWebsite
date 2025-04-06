import * as React from 'react';
import { 
  AppBar, Box, Toolbar, Typography, Button, IconButton, 
  useMediaQuery, useTheme, Drawer, List, ListItem, 
  ListItemText, Link, Container, Slide, Fade, Avatar, Tooltip,
  Badge, ListItemIcon, Divider, useScrollTrigger, Zoom
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import HelpIcon from '@mui/icons-material/Help';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function Navbar({ toggleTheme, currentTheme }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // Added animated indicator state
  const [activeLink, setActiveLink] = React.useState('#about');
  const navLinksRef = React.useRef({});

  // Define nav items with icons
  const navItems = [
    { label: 'About', href: '#about', icon: <InfoIcon /> },
    { label: 'Agenda', href: '#agenda', icon: <EventIcon /> },
    { label: 'Instructions', href: '#instructions', icon: <HelpIcon /> },
    { label: 'Perks', href: '#perks', icon: <CardGiftcardIcon /> }
  ];

  React.useEffect(() => {
    // Update active link based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the section closest to the top of the viewport
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        offset: document.getElementById(item.href.substring(1))?.offsetTop || 0
      }));
      
      // Sort by closest to current scroll position
      const activeSection = sections
        .filter(section => section.offset <= scrollPosition + 200)
        .sort((a, b) => b.offset - a.offset)[0];
      
      if (activeSection) {
        setActiveLink(`#${activeSection.id}`);
      } else {
        setActiveLink(navItems[0].href);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveLink(href);
      if (drawerOpen) setDrawerOpen(false);
    }
  };

  // Fancy animated logo
  const Logo = () => {
    return (
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 600,
          position: 'relative',
          display: 'inline-block',
          background: trigger 
            ? (currentTheme === 'dark' 
              ? 'linear-gradient(45deg, #5c6bc0, #9fa8da)' 
              : 'linear-gradient(45deg, #1a237e, #3949ab)')
            : (currentTheme === 'dark' 
              ? 'linear-gradient(45deg, #5c6bc0, #9fa8da)' 
              : 'linear-gradient(45deg, #1a237e, #3949ab)'),
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: trigger ? '0 2px 10px rgba(26, 35, 126, 0.2)' : 'none',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'scale(1.05) translateY(-2px)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '40%',
            height: '3px',
            bottom: '-2px',
            left: '0',
            background: 'linear-gradient(90deg, #1a237e, transparent)',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}
      >
        Build Bharat Through AI
      </Typography>
    );
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        height: '100%', 
        background: currentTheme === 'dark' 
          ? 'linear-gradient(135deg, #1c1c1c 0%, #2c2c2c 100%)' 
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ 
        p: 3, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
      }}>
        <Logo />
        <IconButton 
          onClick={toggleDrawer(false)}
          sx={{
            bgcolor: currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            '&:hover': {
              bgcolor: currentTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1, px: 2, py: 3 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.label}
            component="a"
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            sx={{
              my: 1,
              py: 1.5,
              px: 2,
              borderRadius: 2,
              bgcolor: activeLink === item.href
                ? (currentTheme === 'dark' ? 'rgba(92, 107, 192, 0.2)' : 'rgba(26, 35, 126, 0.1)')
                : 'transparent',
              color: activeLink === item.href 
                ? 'primary.main' 
                : 'text.primary',
              '&:hover': { 
                bgcolor: currentTheme === 'dark' ? 'rgba(92, 107, 192, 0.3)' : 'rgba(26, 35, 126, 0.15)',
                transform: 'translateX(5px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ListItemIcon sx={{ 
              color: activeLink === item.href ? 'primary.main' : 'text.secondary',
              minWidth: '40px'
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{ 
                fontWeight: activeLink === item.href ? 600 : 400,
                fontFamily: '"Poppins", sans-serif'
              }} 
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ mx: 2 }} />

      <Box sx={{ p: 2 }}>
        <Button
          onClick={toggleTheme}
          startIcon={currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          variant="outlined"
          fullWidth
          sx={{ 
            justifyContent: 'flex-start', 
            py: 1.5, 
            mb: 2,
            borderRadius: 2
          }}
        >
          {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>

        <Button
          variant="contained"
          fullWidth
          startIcon={<HowToRegIcon />}
          href='https://docs.google.com/forms/d/e/1FAIpQLSdM1uafKvhkxFMHHYW-i8ezhLIYeRrlVzad3SzL4HwQuKaAAg/viewform'
          sx={{ 
            py: 1.5,
            borderRadius: 2,
            background: 'linear-gradient(45deg, #1a237e, #3949ab)',
            boxShadow: '0 4px 10px rgba(26, 35, 126, 0.25)',
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ mb: 6 }}>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger 
            ? (currentTheme === 'dark' ? 'rgba(28, 28, 28, 0.85)' : 'rgba(255, 255, 255, 0.85)')
            : 'transparent',
          backdropFilter: trigger ? 'blur(10px) saturate(180%)' : 'none',
          transition: 'all 0.4s ease',
          borderBottom: trigger 
            ? (currentTheme === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)')
            : 'none',
          height: trigger ? 70 : 90,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            height: '100%', 
            px: { xs: 2, md: 3 },
            transition: 'all 0.3s ease'
          }}>
            <Box 
              component="a" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              sx={{ 
                textDecoration: 'none', 
                display: 'flex', 
                alignItems: 'center'
              }}
            >
              <Logo />
            </Box>

            {isMobile ? (
              <IconButton 
                onClick={toggleDrawer(true)}
                sx={{
                  bgcolor: currentTheme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    bgcolor: currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    mr: 2,
                    position: 'relative',
                    height: '100%',
                    alignItems: 'center',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      height: '3px',
                      bottom: '-10px',
                      left: navLinksRef.current[activeLink]?.offsetLeft || 0,
                      width: navLinksRef.current[activeLink]?.offsetWidth || 0,
                      bgcolor: 'primary.main',
                      transition: 'all 0.3s ease-in-out',
                      borderRadius: '3px',
                    }
                  }}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      ref={el => navLinksRef.current[item.href] = el}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: activeLink === item.href ? 600 : 400,
                        color: activeLink === item.href 
                          ? 'primary.main' 
                          : 'text.primary',
                        textDecoration: 'none',
                        position: 'relative',
                        px: isTablet ? 1.5 : 2,
                        py: 0.5,
                        mx: isTablet ? 0.5 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': { 
                          color: 'primary.main',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      {!isTablet && item.icon && (
                        <Box component="span" sx={{ mr: 0.5, opacity: 0.8, display: 'flex', alignItems: 'center' }}>
                          {item.icon}
                        </Box>
                      )}
                      {item.label}
                    </Link>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Tooltip title={currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
                    <IconButton 
                      onClick={toggleTheme}
                      sx={{ 
                        bgcolor: currentTheme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                        width: 40,
                        height: 40,
                        '&:hover': {
                          bgcolor: currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                          transform: 'rotate(20deg)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                  </Tooltip>


                  <Button 
                    variant="contained" 
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdM1uafKvhkxFMHHYW-i8ezhLIYeRrlVzad3SzL4HwQuKaAAg/viewform'
                    startIcon={<HowToRegIcon />}
                    sx={{ 
                      ml: 2,
                      px: isTablet ? 2 : 3,
                      py: '8px',
                      background: 'linear-gradient(45deg, #1a237e, #3949ab)',
                      boxShadow: '0 4px 10px rgba(26, 35, 126, 0.25)',
                      '&:hover': { 
                        transform: 'translateY(-3px)', 
                        boxShadow: '0 6px 15px rgba(26, 35, 126, 0.35)'
                      }
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            borderRadius: '16px 0 0 16px',
            boxShadow: '0 0 25px rgba(0, 0, 0, 0.15)'
          }
        }}
      >
        {drawer}
      </Drawer>

      <Zoom in={trigger}>
        <Box
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: 'linear-gradient(45deg, #1a237e, #3949ab)',
            borderRadius: '50%',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(26, 35, 126, 0.25)',
            '&:hover': { 
              transform: 'translateY(-5px)', 
              boxShadow: '0 6px 15px rgba(26, 35, 126, 0.35)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <KeyboardArrowUpIcon sx={{ color: 'white' }} />
        </Box>
      </Zoom>
    </Box>
  );
}