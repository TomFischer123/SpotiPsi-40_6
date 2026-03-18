import { useEffect, type Dispatch } from "react";
import Playlist from "./Playlist";
import useStyles from "./PlaylistsStyles";
import { Button } from "@mui/material";
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

    useEffect(() => {
        setDivNum(2);
    }, []);

    return (
        <>
            <div className={classes.playlistContainer}>
                <div className={classes.playlistHeader}>
                    <h1>הפלייליסטים שלי</h1>
                    <Button className={classes.addButton} variant="outlined" color="secondary">צור פלייליסט</Button>
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
                            <div className={classes.addPopup}>awdawd</div>
                        </>
                    )
                }
            </div>
        </>
    )
}
export default PlaylistsPage;
