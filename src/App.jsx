import React from 'react';
import Dashboard from './Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Ensure this path is correct
import { Container } from '@mui/material';

function App() {
  return (
<ThemeProvider theme={theme}>
  <CssBaseline />
  <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Dashboard />
  </Container>
</ThemeProvider>
  );
}

export default App;
