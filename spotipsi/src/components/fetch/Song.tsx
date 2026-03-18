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
    fetchFaves: () => Promise<void>
}


function Song({ song, isFav, fetchFaves}: Props) {
    const  { classes } = useStyles();

    const toggleFavorites = async (isFav: boolean) => {
        console.log("Checking favorite on:", song.id)
        if(!isFav) {
            try {
                const response =  await fetch("http://localhost:5001/api/favorites/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({"songId": song.id})
                }) 
                const data = await response.json();
                console.log(data)
                fetchFaves()
            } catch {
                console.log("Something went wrong!");
                return;
            }
            finally {
                console.log("Updated favorites!")
            }
        };
    }

    return (
        <>
            <div className={classes.song}>
                <div className={classes.SongInfo}>
                    <PlayIcon color="secondary"/>
                    <h2>{song.name} - {song.artist}</h2>
                </div>
                <div>
                    <AddIcon />
                    {isFav ? <HeartIcon color="secondary" onClick={() => toggleFavorites(isFav)}/>: <HeartBorderIcon onClick={() => toggleFavorites(isFav)}/>}
                </div>
            </div>
            <hr className={classes.sepLine}></hr>
        </>
    )
}

export default Song
