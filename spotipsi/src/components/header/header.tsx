import React from "react";
import useStyles from "./stylesHeader";
import AppBar from "@mui/material/AppBar";


const Header: React.FC = () => {
    const { classes } = useStyles()
    return (
        <AppBar position="static" className={classes.header} >
            <p dir="rtl" >spotipsi</p>
        </AppBar>
    );
}

export default Header;