import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import React from 'react';

export const ChangeDarkOrLight = ({ light, setLight }) => {
  return (
    <>
      <IconButton
        onClick={() => setLight((prev) => !prev)}
        color="inherit"
        size="large"
        title={light ? 'Change to Dark Mode' : 'Change to Light Mode'}
      >
        {light ? (
          <DarkModeOutlinedIcon fontSize="large" />
        ) : (
          <LightModeOutlinedIcon fontSize="large" />
        )}
      </IconButton>
    </>
  );
};

export let themeLight = createTheme({
  typography: {
    fontFamily: ['VT323'],
  },
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: red[700],
    },
    background: {
      default: grey[100],
    },
    text: {
      primary: '#000000',
      secondary: grey[500],
    },
    search: {
      primary: '#000000',
    },
    button: {
      primary: '#000000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '0.9rem',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#333333',
            minHeight: 24,
            border: '3px solid #f5f5f5',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: grey[600],
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: grey[600],
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: grey[600],
          },
        },
      },
    },
  },
});

themeLight = responsiveFontSizes(themeLight);

export let themeDark = createTheme({
  typography: {
    fontFamily: ['VT323'],
  },
  palette: {
    primary: {
      main: '#191919',
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: grey[50],
      secondary: grey[500],
    },
    search: {
      primary: grey[50],
    },
    button: {
      primary: grey[50],
    },
    divider: grey[800],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '0.9rem',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#cccccc',
            minHeight: 24,
            border: '3px solid #121212',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: grey[600],
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: grey[600],
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: grey[600],
          },
        },
      },
    },
  },
});
themeDark = responsiveFontSizes(themeDark);
