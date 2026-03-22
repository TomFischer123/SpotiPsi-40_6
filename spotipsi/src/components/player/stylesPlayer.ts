import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    footer: {
        display:"flex",
        flexDirection:"column",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        backgroundColor: '#242424',
        alignItems:"center"
    },
    song:{
        margin:"0px",
        fontSize:"12px"
    },
    artist:{
        margin:"0px",
        fontSize:"12px"
    },
    buttons:{
        display:"flex",
        alignItems:"center",

    },
    play:{
        color:"white"
    },
    slider:{
        width:"185vh"
    }
}));

export default useStyles;