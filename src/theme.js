import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? {
      primary: { main: '#1a237e', contrastText: '#ffffff' },
      background: { default: '#ffffff', paper: '#f5f5f5', navbar: 'rgba(255, 255, 255, 0.95)', footer: '#f5f5f5' },
      text: { primary: '#1c1c1c', secondary: '#4a4a4a', hint: '#6d6d6d' },
    } : {
      primary: { main: '#5c6bc0', contrastText: '#ffffff' },
      background: { default: '#1c1c1c', paper: '#4a4a4a', navbar: 'rgba(28, 28, 28, 0.95)', footer: '#1c1c1c' },
      text: { primary: '#ffffff', secondary: '#b0b0b0', hint: '#6d6d6d' },
    }),
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { backdropFilter: 'blur(10px)' } },
    },
  },
});

const createAppTheme = (mode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));
export default createAppTheme;