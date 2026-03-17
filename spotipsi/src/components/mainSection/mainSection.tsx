import React from "react";
import SideBar from "./sideBar/sideBar";
import PageContent from "./pageContent/pageContent";
import useStyles from "./stylesMainSection";

const MainSection: React.FC = () => {
    const { classes } = useStyles()
    return (
        <div className={classes.mainSection}>
            <SideBar />
            <PageContent />
        </div>
    )
}
export default MainSection;