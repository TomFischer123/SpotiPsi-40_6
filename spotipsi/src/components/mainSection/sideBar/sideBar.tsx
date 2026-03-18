import React from "react";
import useStyles from "./stylesSideBar";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const SideBar: React.FC = () => {
    const { classes } = useStyles()
    return (
        <>
            <div className={classes.sideBar}>
                <div className={classes.option}><HomeIcon className={classes.icon}/><p className={classes.p}>כל השירים</p></div>
                <div className={classes.option}><LibraryMusicIcon className={classes.icon}/><p className={classes.p}>פליליסטים</p></div>
                <div className={classes.option}><FavoriteIcon className={classes.icon}/><p className={classes.p}>מועדפים</p></div>
            </div>
        </>
    )
}
export default SideBar;