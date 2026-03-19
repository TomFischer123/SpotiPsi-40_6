import type { Dispatch, SetStateAction } from "react";
import {useEffect} from "react";
import Songs from "../../fetch/FetchSongs"


interface Song {
    id: string
    name: string
    artist: string
    album: string
}

interface PlaylistInterface {
  id: string
  name: string
  songIds: string[]
}

interface Props {
    songList: Song[]
    favIds: string[]
    playlists: PlaylistInterface[]
    setFavIds: () => Promise<void>
    setDivNum: Dispatch<number>,
    setCurrentSong:Dispatch<SetStateAction<Song | undefined>>,
    currentSong:Song | undefined
}


const AllSongs: React.FC<Props> = ({ songList, favIds, setFavIds, setDivNum,setCurrentSong,currentSong, playlists}: Props) => {
    useEffect(() => {
            setDivNum(1);
        }, []);

    return (
        <>
            <Songs
                songList={songList}
                favIds={favIds}
                setFavIds={setFavIds}
                playlists={playlists}
                title="כל השירים"
                setCurrentSong={setCurrentSong}
                currentSong={currentSong}
            />
        </>
    )
}
export default AllSongs;
