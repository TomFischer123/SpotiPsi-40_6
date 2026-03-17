import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    footer: {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
    }
}));

export default useStyles;