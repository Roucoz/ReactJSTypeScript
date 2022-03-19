import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './initials/Themes/DefaultTheme';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';


function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
     <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
