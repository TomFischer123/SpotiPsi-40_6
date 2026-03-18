import type { Dispatch } from "react";
import Songs from "../../fetch/FetchSongs"


interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}


interface Props {
    songList: Song[],
    favIds: string[],
    setDivNum: Dispatch<number>
}


const AllSongs: React.FC<Props> = ({ songList, favIds, setDivNum}: Props) => {
    setDivNum(1)

    return (
        <>
            <Songs
                songList={songList}
                favIds={favIds}
            />
        </>
    )
}
export default AllSongs;
