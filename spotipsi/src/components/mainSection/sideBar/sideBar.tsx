import useStyles from "./stylesSideBar";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

interface Props {
    isdiv: number;
}

const SideBar: React.FC<Props> = ({ isdiv }: Props) => {
    const { classes } = useStyles()

    return (
        <>
            <div className={classes.sideBar}>
                <Link to="/" style={{ textDecoration: 'none' }}> <div className={classes.option} 
                style={{ backgroundColor: isdiv === 1 ? "#1f0723" : "#141414" }} >
                    <HomeIcon className={classes.icon} />
                    <Typography className={classes.p}>כל השירים</Typography></div></Link>
                <Link to="/playlists" style={{ textDecoration: 'none' }}><div className={classes.option} 
                style={{ backgroundColor: isdiv === 2 ? "#1f0723" : "#141414" }}>
                    <LibraryMusicIcon className={classes.icon} />
                    <Typography className={classes.p}>פליליסטים</Typography></div></Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}><div className={classes.option} 
                style={{ backgroundColor: isdiv === 3 ? "#1f0723" : "#141414" }}>
                    <FavoriteIcon className={classes.icon} /><Typography className={classes.p}>מועדפים</Typography>
                    </div></Link>
            </div>
        </>
    )
}
export default SideBar;