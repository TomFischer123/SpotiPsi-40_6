import { useEffect, type Dispatch } from "react"
import Songs from "../../fetch/FetchSongs"


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
    favIds: string[],
    setDivNum: Dispatch<number>
    setFavIds: () => Promise<void>
    playlists: PlaylistInterface[]
}   


const FavoriteSongs: React.FC<Props> = ({ songList, favIds, playlists, setFavIds, setDivNum}: Props) => {
    useEffect(() => {
            setDivNum(3);
        }, []);

    return (
        <>
            <Songs
                songList={songList.filter((song) => {
                    return (favIds.indexOf(song.id) > -1)
                })}
                favIds={favIds}
                setFavIds={setFavIds}
                playlists={playlists}
                title="שירים מועדפים"
            />
        </>
    )
}
export default FavoriteSongs;