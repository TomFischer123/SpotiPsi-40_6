import React from "react";
import useStyles from "./stylesSideBar";

const SideBar: React.FC = () => {
    const { classes } = useStyles()
    return (
        <>
            <div className={classes.sideBar}>
                <h4>כל השירים</h4>
                <h4>פליליסטים</h4>
                <h4>מועדפים</h4>
            </div>
        </>
    )
}
export default SideBar;