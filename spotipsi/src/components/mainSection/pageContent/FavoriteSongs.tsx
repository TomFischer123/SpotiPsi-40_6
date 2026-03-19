import type { Dispatch, SetStateAction } from "react"
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
    setFavIds: () => Promise<void>,
    setCurrentSong: Dispatch<SetStateAction<Song | undefined>>,
    currentSong: Song | undefined,
    playlists:PlaylistInterface[]
}



const FavoriteSongs: React.FC<Props> = ({ songList, favIds, setFavIds, setDivNum ,setCurrentSong,currentSong,playlists}: Props) => {
    setDivNum(3)

    return (
        <>
            <Songs
                songList={songList.filter((song) => {
                    return (favIds.indexOf(song.id) > -1)
                })}
                favIds={favIds}
                setFavIds={setFavIds}
                setCurrentSong={setCurrentSong}
                currentSong={currentSong}
                playlists={playlists}
                title="מועדפים"
            />
        </>
    )
}
export default FavoriteSongs;