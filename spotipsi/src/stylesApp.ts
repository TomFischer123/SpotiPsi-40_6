import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    header: {
        display: "flex",
        justifyContent: "center"
    },
    boxes: {
        display: "flex",
        justifyContent: "space-evenly"

    }

}));

export default useStyles;