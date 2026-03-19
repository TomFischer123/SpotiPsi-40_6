import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()(() => ({
    container: {
        fontFamily: 'arial',
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },

    song: {
        display: 'flex',
        direction: 'ltr',
        flexDirection: 'row',
        fontSize: "55%",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    SongInfo: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
    },

    sepLine: {
        width: '100%',
    },

}))

export default useStyles
