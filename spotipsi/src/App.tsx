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

  const [page, setPage] = useState(0)
  const [isPlaying, setIsPlaiyng] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0);
  const [queueFav, setQueueFav] = useState<Song[]>([])
  const [queuePlaylist, setQueuePlaylist] = useState<Song[]>([])

  const [songList, setSongList] = useState<Song[]>([])
  const [favSongList, setFavSongList] = useState<string[]>([])
  const [playlists, setPlaylists] = useState<PlaylistInterface[]>([])

  const [currentSong, setCurrentSong] = useState<Song>()


  useEffect(() => {
    if (page === 0) { setCurrentSong(songList[0]) }
    else if (page === 1) { setCurrentSong(queueFav[0]) }
    else { setCurrentSong(songList[0]) }
  }, [songList, queueFav]);

  useEffect(() => {
    if (page === 0) { setTrackIndex(currentSong ? songList.indexOf(currentSong) : 0) }
    else if (page === 1) { setTrackIndex(currentSong ? queueFav.indexOf(currentSong) : 0) }
    else { setTrackIndex(currentSong ? songList.indexOf(currentSong) : 0) }
  }, [currentSong])

  useEffect(() => {
    setQueueFav(
      songList.filter((song) => {
        return (favSongList.indexOf(song.id) > -1)
      })
    )
    console.log(queueFav)
  }, [favSongList])

  useEffect(() => {
    console.log(playlists)
    if(playlists[0]){
      console.log(playlists[0].songIds)
      setQueuePlaylist(
      songList.filter((song) => {
        return (playlists[0].songIds.indexOf(song.id) > -1)
      })
    )
    }
  }, [playlists])


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
            setCurrentSong = {setCurrentSong}
            currentSong={currentSong}
            page={page}
            setPage={setPage}
            isdiv={1}
          />
          <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaiyng}
            queue={page === 0 ? songList : page === 1?  queueFav :queuePlaylist} setTrackIndex={setTrackIndex} trackIndex={trackIndex} currentTime='hh' duration='h' />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;