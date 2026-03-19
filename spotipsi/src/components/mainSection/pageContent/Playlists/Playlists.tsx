import { useEffect, useState, type Dispatch } from "react";
import Playlist from "./Playlist";
import useStyles from "./PlaylistsStyles";
import { Button, TextField, Typography } from "@mui/material";
import { List } from "@mui/material";

interface PlaylistInterface {
  id: string,
  name: string,
  songIds: string[],
}

interface Props {
    playlists: PlaylistInterface[],
    setDivNum: Dispatch<number>,
}


const PlaylistsPage: React.FC<Props> = ({ playlists , setDivNum}: Props) => {
    const { classes } = useStyles()
    const [isCreating, setIsCreating] = useState<boolean>(false)

    useEffect(() => {
        setDivNum(2);
    }, []);

    return (
        <>
            <div className={classes.playlistContainer}>
                <div className={classes.playlistHeader}>
                    <h1>הפלייליסטים שלי</h1>
                    <Button className={classes.addButton} variant="outlined" color="secondary" onClick={() => {setIsCreating(prev => !prev)}}>צור פלייליסט</Button>
                </div>
                {
                    (!playlists || playlists.length === 0) 
                    ? <p>No playlists yet...</p>: 
                    (
                        <>
                            <List>
                                {
                                    playlists.map((playlist, index) => (
                                        <Playlist 
                                            playlist={playlist}
                                            key={index}
                                        />
                                    ))}
                            </List>
                            
                            {isCreating ?
                             (
                                <div className={classes.addPopup}>
                                    <Typography className={classes.popUpHeader}>יצירת פלייליסט חדש</Typography>
                                    <TextField className={classes.popupTextField} variant="standard" label="שם הפלייליסט"></TextField>
                                    
                                    <div className={classes.popupButtons}>
                                        <Button onClick={() => {setIsCreating(prev => !prev)}}>ביטול</Button>
                                        <Button>צור</Button>
                                    </div>
                                </div>
                            )
                            : null}
                        </>
                    )
                }
            </div>
        </>
    )
}
export default PlaylistsPage;
