import { useEffect, type Dispatch } from "react";
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
    setFavIds: () => Promise<void>
    setDivNum: Dispatch<number>
}


const AllSongs: React.FC<Props> = ({ songList, favIds, setFavIds, setDivNum}: Props) => {
    useEffect(() => {
            setDivNum(1);
        }, []);

    return (
        <>
            <Songs
                songList={songList}
                favIds={favIds}
                setFavIds={setFavIds}
                title="כל השירים"
            />
        </>
    )
}
export default AllSongs;
