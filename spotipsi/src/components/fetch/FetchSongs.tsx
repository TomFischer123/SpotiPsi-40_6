import useStyles from './SongsStyles';
import Song from './Song';


interface SongInterface {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    title: string,
    songList: SongInterface[],
    favIds: string[]
    setFavIds: () => Promise<void>
}


function Songs({ title, songList, favIds, setFavIds}: Props) {
    const  { classes } = useStyles();
    

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
                            fetchFaves={setFavIds}
                        />
                    )) 
                }
            </div>
        </>
    )
}

export default Songs
