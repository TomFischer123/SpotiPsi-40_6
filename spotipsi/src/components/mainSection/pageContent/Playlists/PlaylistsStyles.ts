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

    playlistLink: {
        textDecoration: "none", 
        color: "inherit",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
    },

    miniInfo: {
        fontSize: '80%',
        color: 'grey',

    },

    addPopup: {
        color: 'black',
        display: 'flex',
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
        justifyContent: 'left',
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
