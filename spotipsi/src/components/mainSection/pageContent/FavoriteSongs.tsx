import { useEffect, type Dispatch } from "react"
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
    setFavIds: () => Promise<void>
}   


const FavoriteSongs: React.FC<Props> = ({ songList, favIds, setFavIds, setDivNum}: Props) => {
    useEffect(() => {
            setDivNum(3);
        }, []);

    return (
        <>
            <Songs
                songList={songList.filter((song) => {
                    return (favIds.indexOf(song.id) > -1)
                })}
                favIds={favIds}
                setFavIds={setFavIds}
                title="שירים מועדפים"
            />
        </>
    )
}
export default FavoriteSongs;