import { useState } from 'react'
import useStyles from './stylesApp'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/header/header';
import theme from './theme';
import Footer from './components/footer/footer';
import MainSection from './components/mainSection/mainSection';

function App() {
  const { classes } = useStyles();
  return (
    <>
      <ThemeProvider theme={theme} >
        <Header />
        <MainSection />
        <Footer />
      </ThemeProvider>
    </>

  )
}

export default App;