import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Always use dark mode
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#0000f5',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#ffffff', // Ensuring headers are also white or bright enough for dark backgrounds
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      color: '#ffffff', // Ensuring headers are also white or bright enough for dark backgrounds
    },
    // You can adjust or add more typography settings to ensure text visibility
  },
});

export default theme;
