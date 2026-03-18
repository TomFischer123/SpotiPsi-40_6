import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sideBar: {
        display: 'flex',
        flexDirection: "column",
        height: "100vh",
        width: "15%",
        borderLeft: 'solid',
        borderLeftWidth: '1px',
        borderLeftColor: '1px',
        margin: '1%',
    },
    option: {
        display: "flex",
        alignItems: "center",
        color: "#939292",
         "&:hover": {
            backgroundColor: "#1f0723"
        }
    },
    icon: {
        paddingLeft: "20px",
        color: "#5f5d5d"
    },
    p:{
        fontSize: "13px"
    }

}));

export default useStyles;