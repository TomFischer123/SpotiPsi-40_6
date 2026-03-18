import React from "react";
import useStyles from "./stylesHeader";
import AppBar from "@mui/material/AppBar";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


const Header: React.FC = () => {
    const { classes } = useStyles()
    return (
        <AppBar position="static" className={classes.header} >
            <div className={classes.contant} dir="rtl"><p dir="rtl" ><b>spotiPsi</b></p>
            <MusicNoteIcon/></div>

        </AppBar>
    );
}

export default Header;