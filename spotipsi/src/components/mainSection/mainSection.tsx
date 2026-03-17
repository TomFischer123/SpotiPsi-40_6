import React, { type Dispatch } from "react";
import SideBar from "./sideBar/sideBar";
import PageContent from "./pageContent/pageContent";
import useStyles from "./stylesMainSection";


interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    songList: Song[],
    setSongList: Dispatch<Song[]>,
}


const MainSection: React.FC<Props> = ({ songList, setSongList }: Props) => {
    const { classes } = useStyles()
    return (
        <div className={classes.mainSection}>
            <SideBar />
            <PageContent 
                songList={songList}
                setSongList={setSongList}
            />
        </div>
    )
}
export default MainSection;