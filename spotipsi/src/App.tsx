import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/header/header';
import theme from './theme';
import Footer from './components/footer/footer';
import MainSection from './components/mainSection/mainSection';
import { BrowserRouter as Router } from 'react-router-dom';


interface Song {
  id: string,
  name: string,
  artist: string,
  album: string,
}


function App() {
  const [songList, setSongList] = useState<Song[]>([])
  const [favSongList, setFavSongList] = useState<string[]>([])


  return (
    <>
      <ThemeProvider theme={theme} >
        <Router>
          <Header />
          <MainSection 
            songList={songList}
            setSongList={setSongList}
            favSongList={favSongList}
            setFavSongList={setFavSongList}
            isdiv={1}
          />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App