import { useEffect, type Dispatch } from 'react';
import { useState } from 'react';
import useStyles from './SongsStyles';
import AddIcon from '@mui/icons-material/Add'
import HeartIcon from '@mui/icons-material/FavoriteBorder'
import PlayIcon from '@mui/icons-material/PlayArrow'


interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    songList: Song[],
    setSongList: Dispatch<Song[]>,
}
//TODO: DOCUMENTATION


function Songs({ songList, setSongList }: Props) {
    const  { classes } = useStyles();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const fetchSongs = async () => {
        setIsLoading(true);
        try {
            const response =  await fetch("http://localhost:5001/api/songs");
            const data = await response.json();

            setSongList(data)
        } catch (err) {
            setError("Something went wrong!");
            console.log(err);
            return;
        }
        finally {
            setIsLoading(false);
        }

    };

    useEffect(() => {
        fetchSongs();
    }, [])

    return (
        <>
            <div className={classes.container}>
                <h1>כל השירים</h1>
                {isLoading ? <p>Loading...</p> : null}

                {error ? <p>{error}</p> : null}

                {(!error && !isLoading ) 
                    ? songList.map((song, index) => (
                        <>
                            <div key={index} className={classes.song}>
                                <div className={classes.SongInfo}>
                                    <PlayIcon />
                                    <h2>{song.name} - {song.artist}</h2>
                                </div>
                                <div>
                                    <AddIcon />
                                    <HeartIcon />
                                </div>
                            </div>
                            <hr className={classes.sepLine}></hr>
                        </>)) 
                    : null
                }
            </div>
        </>
    )
}

export default Songs
