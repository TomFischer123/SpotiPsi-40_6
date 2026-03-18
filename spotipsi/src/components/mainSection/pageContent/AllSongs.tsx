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
}


const AllSongs: React.FC<Props> = ({ songList, favIds}: Props) => {

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