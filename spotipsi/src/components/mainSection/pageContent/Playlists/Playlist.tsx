import { ListItem } from "@mui/material"
import useStyles from "./PlaylistsStyles"
import { Typography } from "@mui/material"
import { Link } from 'react-router-dom';

interface PlaylistInterface {
  id: string,
  name: string,
  songIds: string[],
}

interface Props {
    playlist: PlaylistInterface,
}



const Playlist: React.FC<Props> = ({ playlist }: Props) => {
    const { classes } = useStyles()

    const openPlaylist = () => {
        
        console.log("Clicked:", playlist.name)
    };

    return (
        <ListItem className={classes.playlist}>
            <Link to={"/playlists/" + playlist.id} className={classes.playlistLink}>
                <div className={classes.playlistInfo} onClick={openPlaylist}>
                    <Typography>{playlist.name}</Typography>
                    <Typography className={classes.miniInfo}>{playlist.songIds.length} שירים</Typography>
                </div>
            </Link>
            <hr className={classes.sepLine}></hr>
        </ListItem>
    )
}
export default Playlist;
