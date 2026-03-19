import useStyles from './SongsStyles';
import AddIcon from '@mui/icons-material/Add'
import HeartBorderIcon from '@mui/icons-material/FavoriteBorder'
import HeartIcon from '@mui/icons-material/Favorite'
import PlayIcon from '@mui/icons-material/PlayArrow'
import { Button, List, ListItem, Popover, Typography } from '@mui/material';
import { useState, type Dispatch, type SetStateAction } from 'react';


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
    song: SongInterface,
    isFav: boolean,
    fetchFaves: () => Promise<void>
    playlists: PlaylistInterface[],
    setCurrentSong: Dispatch<SetStateAction<SongInterface | undefined>>,
    currentSong: SongInterface | undefined
}


function Song({ song, isFav, playlists, fetchFaves,setCurrentSong , currentSong}: Props) {
    const  { classes } = useStyles();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const toggleFavorites = async () => {
        console.log("Checking favorite on:", song.id)
        if (!isFav) {
            try {
                await fetch("http://localhost:5001/api/favorites/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({ "songId": song.id })
                })
                console.log("Updated favorites!")
                fetchFaves()
            } catch {
                console.log("Something went wrong!");
                return;
            }
            finally {
                console.log("Finished favorites update!")
            }
        }
        else {
            try {
                await fetch("http://localhost:5001/api/favorites/remove", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({ "songId": song.id })
                })
                console.log("Updated favorites!")
                fetchFaves()
            } catch {
                console.log("Something went wrong!");
                return;
            }
            finally {
                console.log("Finished favorites update!")
            }
        }
    }
    const onSongClick =() =>
    {
        console.log(song)
        setCurrentSong(song)
    }

    const handleClick = (event: React.MouseEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };

    const addToPlaylist = async (playlist: PlaylistInterface) => {
        try {
                await fetch(("http://localhost:5001/api/playlists/" + playlist.id + "/add"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({"songId": song.id})
                })
                console.log("Updated playlist!")
                
            } catch {
                console.log("Something went wrong!");
                return;
            }
            finally {
                console.log("Finished playlist update!")
            }
    };

    return (
        <>
            <div className={classes.song} onClick={onSongClick}>
                <div className={classes.SongInfo}>
                    <PlayIcon color="secondary" />
                    <h2>{song.name} - {song.artist}</h2>
                </div>
                <div>
                    <AddIcon onClick={handleClick}/>
                        <Popover 
                            open={open} 
                            id={id}
                            anchorEl={anchorEl}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }} >
                        <List>
                            {playlists.map((playlist, index) => {
                                return (
                                <ListItem key={index}>
                                    <Button sx={{color: 'white'}} onClick={() => {addToPlaylist(playlist)}}>{playlist.name}</Button>
                                </ListItem>
                                )
                            })}
                        </List>
                    </Popover>
                    {isFav ? <HeartIcon color="secondary" onClick={toggleFavorites}/>: <HeartBorderIcon onClick={toggleFavorites}/>}
                </div>
            </div>
            <hr className={classes.sepLine}></hr>
        </>
    )
}

export default Song;


