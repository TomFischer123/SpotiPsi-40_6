import useStyles from './SongsStyles';
import Song from './Song';

interface SongInterface {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    songList: SongInterface[],
    favIds: string[]
}


function Songs({ songList, favIds }: Props) {
    const  { classes } = useStyles();
    

    return (
        <>
            <div className={classes.container}>
                <h1>כל השירים</h1>
                {
                    songList.map((song, index) => (
                        <Song 
                            song={song}
                            key={index}
                            isFav={(favIds.indexOf(song.id) > -1)}
                        />
                    )) 
                }
            </div>
        </>
    )
}

export default Songs
