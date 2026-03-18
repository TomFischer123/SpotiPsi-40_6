import React, { useEffect, useState, type Dispatch } from "react";
import SideBar from "./sideBar/sideBar";
import useStyles from "./stylesMainSection";
import AllSongs from "./pageContent/AllSongs";
import FavoriteSongs from "./pageContent/FavoriteSongs";
import { Routes, Route } from "react-router-dom";


interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    songList: Song[],
    setSongList: Dispatch<Song[]>,
    favSongList: string[],
    setFavSongList: Dispatch<string[]>,
    isdiv: number
}



const MainSection: React.FC<Props> = ({ songList, setSongList, favSongList, setFavSongList, isdiv }: Props) => {
    const [divNum, setDivNum] = useState(isdiv)
    const { classes } = useStyles()

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const fetchSongs = async (setSongs: Dispatch<Song[]> | Dispatch<string[]>, url: string) => {
        setIsLoading(true);
        try {
            const response =  await fetch(url);
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
    }, [])


    return (
        <div className={classes.mainSection}>
            <SideBar isdiv={divNum}/>
            {isLoading ? <p>Loading...</p> : null}

            {error ? <p>{error}</p> : null}

            {(!error && !isLoading)
                ? 
                    <>
                        <Routes>
                            <Route
                                path="/"
                                element={<AllSongs songList={songList} favIds={favSongList} />}
                            />
                            <Route
                                path="/favorites"
                                element={<FavoriteSongs songList={songList} favIds={favSongList} />}
                            />
                        </Routes>
                    </> : null
            }
        </div>
    )
}
export default MainSection;
