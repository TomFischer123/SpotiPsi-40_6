import React from "react";
import useStyles from "./stylesFooter";

const Footer: React.FC = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.footer}>
            <p>סנן שירים</p>
        </div>
    );
}
export default Footer;