import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    custom: {
      hero: '#003366',
      about: '#f5f5f5',
      cidade: '#868686',
      equipe: '#e3f2fd',
      features: '#f5f5f5',
      contato: '#ffffff',
      ouvidoria: '#f5f5f5',
      header: '#ffffff',
      footer: '#212121',
    }
  }
});