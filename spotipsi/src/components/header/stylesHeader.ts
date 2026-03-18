import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    header: {
        color: "purple",
        padding:"10px"
    },
    contant:{
        display:"flex",
        alignItems:"center"
    }


}));

export default useStyles;