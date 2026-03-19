import React, { type Dispatch, type SetStateAction } from "react";
import useStyles from "./stylesPlayer";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import usePlayerHook from "./playerHook";

interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
}
interface Props {
    currentSong: Song | undefined,
    isPlaying: boolean,
    queue: Song[],
    currentTime: string,
    duration: string,
    setIsPlaying: Dispatch<SetStateAction<boolean>>,
    trackIndex: number,
    setTrackIndex: Dispatch<SetStateAction<number>>

}

const Player: React.FC<Props> = ({ currentSong, isPlaying, setIsPlaying, queue, setTrackIndex, trackIndex }: Props) => {
    const { classes } = useStyles();
    const [handleClickPlay, toPrevTrack, toNextTrack, isPalyingH, trackIndexH] = usePlayerHook(currentSong, isPlaying, setIsPlaying, queue, setTrackIndex, trackIndex)

    return (
        <div className={classes.footer}>
            <Typography className={classes.song}><b>{queue[trackIndexH] ? queue[trackIndexH].name : "un"}</b></Typography>
            <Typography className={classes.artist}>{queue[trackIndexH] ? queue[trackIndexH].artist : "un"}</Typography>
            <div className={classes.buttons}>
                <IconButton className={classes.play} onClick={toPrevTrack}><SkipPreviousIcon fontSize="small" /></IconButton>
                <IconButton className={classes.play} onClick={handleClickPlay}>{isPalyingH === false ? <PlayArrowIcon /> : <PauseIcon />}</IconButton>
                <IconButton className={classes.play} onClick={toNextTrack}><SkipNextIcon fontSize="small" /></IconButton>
            </div>
            <Box>
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