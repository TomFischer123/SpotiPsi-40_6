import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/header/header';
import theme from './theme';
import Footer from './components/footer/footer';
import MainSection from './components/mainSection/mainSection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Player from './components/player/player';


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
          <Routes>
            <Route path='/' element={ <><Header /><MainSection
              songList={songList}
              setSongList={setSongList}
              isdiv={1} /><Player /></>} />
            <Route path ="/playlists" element = {<><Header /><MainSection
              songList={songList}
              setSongList={setSongList}
              isdiv={2} /><Footer /></>}/>
            <Route path ="/favorits" element = {<><Header /><MainSection
              songList={songList}
              setSongList={setSongList}
              isdiv={3} /><Footer /></>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App