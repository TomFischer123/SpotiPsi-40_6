import React from "react";
import useStyles from "./stylesPlayer";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const Player: React.FC = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.song}><b>wake up</b></p>
            <p className={classes.artist}>artist</p>
            <div className={classes.buttons}>
                <SkipPreviousIcon fontSize="small" />
                <PlayArrowIcon />
                <SkipNextIcon fontSize="small" />
            </div>
            <Box >
                <Slider className={classes.slider}
                    size="small"
                    defaultValue={0}
                    aria-label="Small"
                    valueLabelDisplay="auto"

                />
            </Box>

        </div>
    );
}
export default Player;