import React, { type Dispatch } from "react";
import Songs from "../../fetch/FetchSongs"


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


const PageContent: React.FC<Props> = ({ songList, setSongList }: Props) => {

    return (
        <>
            <Songs
                songList={songList}
                setSongList={setSongList}
            />
        </>
    )
}
export default PageContent;