import React, { useState } from "react";
import useStyles from "./stylesPlayer";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}
interface Props{
    currentSong:Song | undefined,
    isPlaying:boolean,
    queue:Song[],
    currentTime:string,
    duration:string
}

const Player: React.FC<Props> = ({currentSong,isPlaying,queue,currentTime,duration}:Props) => {
    console.log(currentSong)
    const { classes } = useStyles();
    const [click,setClick]  =useState(0)

    const handleClickPlay =() =>{
        if(click ===0)
        {
            setClick(1)
            isPlaying = true
        }
        else{
            setClick(0)
            isPlaying = false
        }
    }

    return (
        <div className={classes.footer}>
            <p className={classes.song}><b>{currentSong === undefined? "un":currentSong.name}</b></p>
            <p className={classes.artist}>{currentSong === undefined? "un":currentSong.artist}</p>
            <div className={classes.buttons}>
                <IconButton className={classes.play} ><SkipPreviousIcon fontSize="small" /></IconButton>
                <IconButton className={classes.play} onClick={handleClickPlay}>{ click===0? <PlayArrowIcon />:<PauseIcon/>}</IconButton>
                <IconButton className={classes.play} ><SkipNextIcon fontSize="small" /></IconButton>
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