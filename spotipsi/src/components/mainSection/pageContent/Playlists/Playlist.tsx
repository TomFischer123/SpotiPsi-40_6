import { ListItem } from "@mui/material"
import useStyles from "./PlaylistsStyles"
import { Typography } from "@mui/material"

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

    return (
        <ListItem className={classes.playlist}>
            <div className={classes.playlistInfo}>
                <Typography>{playlist.name}</Typography>
                <Typography className={classes.miniInfo}>{playlist.songIds.length} שירים</Typography>
            </div>
            <hr className={classes.sepLine}></hr>
        </ListItem>
    )
}
export default Playlist;
