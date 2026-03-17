import { useState } from 'react'
import useStyles from './stylesApp'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/header/header';
import theme from './theme';
import Footer from './components/footer/footer';
import MainSection from './components/mainSection/mainSection';
import Songs from "./components/fetch/FetchSongs"


interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}


function App() {
  const { classes } = useStyles();
  const [songList, setSongList] = useState<Song[]>([])
  return (
    <>
      <ThemeProvider theme={theme} >
        <Header />
        <MainSection />
        <Songs 
        songList={songList}
        setSongList={setSongList}
        />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App