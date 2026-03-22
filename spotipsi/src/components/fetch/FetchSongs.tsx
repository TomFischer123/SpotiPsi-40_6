import useStyles from './SongsStyles';
import Song from './Song';
import type { Dispatch, SetStateAction } from 'react';


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
    title: string,
    songList: SongInterface[],
    favIds: string[]
    setFavIds: () => Promise<void>,
    setCurrentSong: Dispatch<SetStateAction<SongInterface | undefined>>,
    currentSong: SongInterface | undefined,
    playlists: PlaylistInterface[],
}


function Songs({ songList, favIds, setFavIds,setCurrentSong,currentSong,playlists,title }: Props) {
    const { classes } = useStyles();


    return (
        <>
            <div className={classes.container}>
                <h1>{title}</h1>
                {
                    songList.map((song, index) => (
                        <Song
                            song={song}
                            key={index}
                            isFav={(favIds.indexOf(song.id) > -1)}
                            playlists={playlists}
                            fetchFaves={setFavIds}
                            setCurrentSong={setCurrentSong}
                            currentSong={currentSong}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Songs
