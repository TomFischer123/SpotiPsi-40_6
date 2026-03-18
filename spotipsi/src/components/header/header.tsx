import React from "react";
import useStyles from "./stylesHeader";
import AppBar from "@mui/material/AppBar";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Typography from "@mui/material/Typography";


const Header: React.FC = () => {
    const { classes } = useStyles()
    return (
        <AppBar position="static" className={classes.header} >
            <div className={classes.contant} dir="rtl"><Typography  dir="rtl" ><b>spotiPsi</b></Typography>
            <MusicNoteIcon/></div>

        </AppBar>
    );
}

export default Header;