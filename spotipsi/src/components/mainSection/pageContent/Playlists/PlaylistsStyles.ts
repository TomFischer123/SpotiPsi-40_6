import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()(() => ({
    
    playlistContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },

    playlistHeader: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    playlist: {
        display: 'flex',
        flexDirection: 'column',
    },

    miniInfo: {
        fontSize: '80%',
        color: 'grey',

    },

    addPopup: {
        position: 'absolute',
        backgroundColor: 'grey',
        width: '500px',
        height: '300px',
        right: '50vw',
        top: '50vh',
        marginTop: '-50px',
        marginLeft: '-50px',
    },

    playlistInfo: {
        width: '100%',
        justifyItems: 'left',
    },

    addButton: {
        height: '50%',
        borderRadius: '100px',
    },

    sepLine: {
        width: '100%',
    },

}))

export default useStyles
