import useStyles from "./PlaylistsStyles";
import Songs from "../../../fetch/FetchSongs";
import { useParams } from "react-router-dom";
import { useEffect ,type Dispatch, type SetStateAction } from "react";

interface SongInterface {
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
    songList: SongInterface[],
    playlists: PlaylistInterface[],
    favIds: string[],
    setFavIds: () => Promise<void>
    setPlaylists: () => Promise<void>
    setCurrentSong: Dispatch<SetStateAction<SongInterface | undefined>>,
    currentSong: SongInterface | undefined
}


const ShowPlaylist: React.FC<Props> = ({ songList, playlists, favIds, setFavIds, setPlaylists,setCurrentSong,currentSong }: Props) => {
    const params = useParams()
    const playlist = playlists[playlists.map((playlist) => {return playlist.id}).indexOf(params.id)]

    return (
        <>
            {playlist ?
            <Songs
                songList={songList.filter((song) => {
                    return (playlist.songIds.indexOf(song.id) > -1)
                })}
                favIds={favIds}
                setFavIds={setFavIds}
                title={playlist.name}
                playlists={playlists}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            /> : null
            }
        </>
    )
}
export default ShowPlaylist;
