import React, { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import SideBar from "./sideBar/sideBar";
import useStyles from "./stylesMainSection";
import AllSongs from "./pageContent/AllSongs";
import FavoriteSongs from "./pageContent/FavoriteSongs";
import PlaylistsPage from "./pageContent/Playlists/Playlists";
import ShowPlaylist from "./pageContent/Playlists/ShowPlaylist";
import { Routes, Route, useLocation } from "react-router-dom";


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


interface Props {
    songList: Song[],
    setSongList: Dispatch<Song[]>,
    favSongList: string[],
    setFavSongList: Dispatch<string[]>,
    isdiv: number,
    playlists: PlaylistInterface[],
    setPlaylistList: Dispatch<PlaylistInterface[]>,
    setCurrentSong:Dispatch<SetStateAction<Song | undefined>>,
    currentSong:Song | undefined,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}



const MainSection: React.FC<Props> = ({ songList, setSongList, favSongList, setFavSongList, setCurrentSong, currentSong, isdiv, page, setPage,playlists, setPlaylistList}: Props) => {

    let location = useLocation();

    const [divNum, setDivNum] = useState(isdiv);
    const { classes } = useStyles();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const fetchSongs = async (setSongs: (Dispatch<Song[]> | Dispatch<string[]> | Dispatch<PlaylistInterface[]>), url: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            setSongs(data)
        } catch (err) {
            setError("Something went wrong!");
            console.log(err);
            return;
        }
        finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchSongs(setSongList, "http://localhost:5001/api/songs");
        fetchSongs(setFavSongList, "http://localhost:5001/api/favorites");
        fetchSongs(setPlaylistList, "http://localhost:5001/api/playlists");
    }, [])

    useEffect(() => {
        if (location.pathname === "/") {
            setPage(0)
        }
        else if (location.pathname === "/favorites") {
            setPage(1)
        }
        else {
            setPage(2)
        }
    }, [location])

    return (
        <div className={classes.mainSection}>
            <SideBar isdiv={divNum} />
            {isLoading ? <p>Loading...</p> : null}

            {error ? <p>{error}</p> : null}

            {(!error && !isLoading)
                ? <>
                    <Routes>
                        <Route
                            path="/"
                            element={<AllSongs 
                                songList={songList} 
                                favIds={favSongList} 
                                playlists={playlists}
                                setFavIds={() => fetchSongs(setFavSongList, "http://localhost:5001/api/favorites")}
                                setDivNum={setDivNum} 
                                setCurrentSong={setCurrentSong}
                                    currentSong={currentSong}/>}
                        />
                        <Route
                            path="/playlists"
                            element={<PlaylistsPage
                                playlists={playlists}
                                setPlaylists={() => fetchSongs(setPlaylistList, "http://localhost:5001/api/playlists")}
                                setDivNum={setDivNum} 
                                setCurrentSong={setCurrentSong}
                                    currentSong={currentSong}/>}
                        />
                        <Route
                            path="/playlists/:id"
                            element={<ShowPlaylist
                                playlists={playlists}
                                songList={songList}
                                favIds={favSongList}
                                setPlaylists={() => fetchSongs(setPlaylistList, "http://localhost:5001/api/playlists")}
                                setFavIds={() => fetchSongs(setFavSongList, "http://localhost:5001/api/favorites")} 
                                setCurrentSong={setCurrentSong}
                                currentSong={currentSong}/>}
                        />
                        <Route
                            path="/favorites"
                            element={<FavoriteSongs 
                                songList={songList} 
                                favIds={favSongList}
                                setFavIds={() => fetchSongs(setFavSongList, "http://localhost:5001/api/favorites")}
                                playlists={playlists}
                                setDivNum={setDivNum}
                                setCurrentSong={setCurrentSong}
                                currentSong={currentSong} />}
                        />
                    </Routes>
                </> : null
            }
        </div>
    )
}
export default MainSection;
