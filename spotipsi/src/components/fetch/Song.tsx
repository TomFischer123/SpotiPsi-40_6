import useStyles from './SongsStyles';
import AddIcon from '@mui/icons-material/Add'
import HeartBorderIcon from '@mui/icons-material/FavoriteBorder'
import HeartIcon from '@mui/icons-material/Favorite'
import PlayIcon from '@mui/icons-material/PlayArrow'


interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    song: Song,
    isFav: boolean,
}


function Song({ song, isFav }: Props) {
    const  { classes } = useStyles();

    return (
        <>
            <div className={classes.song}>
                <div className={classes.SongInfo}>
                    <PlayIcon color="secondary"/>
                    <h2>{song.name} - {song.artist}</h2>
                </div>
                <div>
                    <AddIcon />
                    {isFav ? <HeartIcon color="secondary"/>: <HeartBorderIcon />}
                </div>
            </div>
            <hr className={classes.sepLine}></hr>
        </>
    )
}

export default Song
