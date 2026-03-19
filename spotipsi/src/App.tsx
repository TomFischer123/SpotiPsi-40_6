import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/header/header';
import theme from './theme';
import MainSection from './components/mainSection/mainSection';
import { BrowserRouter as Router } from "react-router-dom"
import Player from './components/player/player';


interface Song {
  id: string,
  name: string,
  artist: string,
  album: string,
}

interface PlaylistInterface {
  id: string,
  name: string,
  songIds: string[],
}


function App() {
  const [songList, setSongList] = useState<Song[]>([])
  const [favSongList, setFavSongList] = useState<string[]>([])
  const [playlists, setPlaylists] = useState<PlaylistInterface[]>([])

  
  const [currentSong, setCurrentSong] = useState<Song>()

  useEffect(() => {
    setCurrentSong(songList[0])
  }, [songList]);

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
            playlists={playlists}
            setPlaylistList={setPlaylists}
            isdiv={1}
          />
          <Player currentSong = {currentSong} isPlaying = {false} queue={songList} currentTime='0' duration='3:00'/>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App