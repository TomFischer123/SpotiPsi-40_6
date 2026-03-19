import { useEffect, useState, type Dispatch } from "react";
import Playlist from "./Playlist";
import useStyles from "./PlaylistsStyles";
import { Button, TextField, Typography, Dialog, DialogContent, DialogActions } from "@mui/material";
import { List } from "@mui/material";

interface PlaylistInterface {
  id: string,
  name: string,
  songIds: string[],
}

interface Props {
    playlists: PlaylistInterface[],
    setDivNum: Dispatch<number>,
    setPlaylists: () => Promise<void>
}


const PlaylistsPage: React.FC<Props> = ({ playlists, setDivNum, setPlaylists, }: Props) => {
    const { classes } = useStyles()
    const [isCreating, setIsCreating] = useState<boolean>(false)

    useEffect(() => {
        setDivNum(2);
    }, []);

    const uploadNewPlaylist = async (name: string) => {
        try {
            const response =  await fetch('http://localhost:5001/api/playlists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({'name': name})
            });

            if(response.ok)
                console.log("Finished uploading!");
        } catch (err) {
            console.log(err);
            return;
        }
        finally {
            setPlaylists();
            console.log("Exiting uploading");
        }
    };
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const playlistName = formJson.playlistName;
        uploadNewPlaylist(playlistName)
        setIsCreating(prev => !prev);
    };
    
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
                                            key={index}
                                            playlist={playlist}
                                        />
                                    ))}
                            </List>
                            
                            {
                             (
                                <Dialog open={isCreating} fullWidth={true} maxWidth={'xs'} className={classes.addPopup}>
                                    <DialogContent>
                                        <Typography className={classes.popUpHeader}>יצירת פלייליסט חדש</Typography>
                                        <form onSubmit={handleSubmit} id="add-playlist">
                                            <TextField className={classes.popupTextField} required name="playlistName" variant="standard" label="שם הפלייליסט"></TextField>
                                        </form>
                                    </DialogContent>
                                    <DialogActions className={classes.popupButtons}>
                                        <Button color="" type="submit" form="add-playlist">צור</Button>
                                        <Button color="secondary" onClick={() => {setIsCreating(prev => !prev)}}>ביטול</Button>
                                    </DialogActions>
                                </Dialog>
                            )
                            }
                        </>
                    )
                }
            </div>
        </>
    )
}
export default PlaylistsPage;
