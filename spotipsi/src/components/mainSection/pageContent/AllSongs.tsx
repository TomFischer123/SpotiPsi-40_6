import { useEffect, type Dispatch } from "react";
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
    setDivNum: Dispatch<number>
}


const AllSongs: React.FC<Props> = ({ songList, favIds, playlists, setFavIds, setDivNum}: Props) => {
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
            />
        </>
    )
}
export default AllSongs;
