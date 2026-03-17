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
    }

}));

export default useStyles;