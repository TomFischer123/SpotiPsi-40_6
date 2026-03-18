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
        width: '450px',
        height: '270px',
        padding: '25px',
        left: 'calc(50% - 250px)',
        top: 'calc(50% - 150px)',

        display: 'none',
        flexDirection: 'column',
        gap: '15%',
    },

    popUpHeader: {
        padding: '18px',
        fontSize: '120%',
    },

    popupTextField: {
        '& label': {
            color: 'white', // Label color
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white', // Default underline
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'white', // Hover underline
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white', // Focused underline
        },
        '& input': {
            color: 'white', // Text color
        },
        width: '100%',
    },

    popupButtons: {
        '& .MuiButton-root': {
            color: 'white',
        },

        display:'flex',
        width: '100%',
        justifyContent: 'flex-end',

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
