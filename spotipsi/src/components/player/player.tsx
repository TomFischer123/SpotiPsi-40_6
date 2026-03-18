import React, { useState, useEffect } from "react";
import useStyles from "./stylesPlayer";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { useRef } from 'react';

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
    duration: string
}

const Player: React.FC<Props> = ({ currentSong, isPlaying, queue }: Props) => {
    const { classes } = useStyles();
    const [isplaying, setIsPlaiyng] = useState(isPlaying)
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const audioRef = useRef(new Audio(currentSong ? `/songs/${currentSong.id}.mp3` : ""));
    useEffect(() => {
        if (currentSong) {
            audioRef.current = new Audio(`/songs/${currentSong.id}.mp3`);
        }
    }, [currentSong]);

    const intervalRef = useRef(undefined);
    const isReady = useRef(false);

    const duration = audioRef.current.duration;

    const toPrevTrack = () => {
        console.log(trackIndex)
        if (trackIndex - 1 < 0) {
            audioRef.current.pause();
            setIsPlaiyng(false)
            setTrackIndex(queue.length - 1);

        } else {
            audioRef.current.pause();
            setIsPlaiyng(false)
            setTrackIndex(prev => prev - 1);
            console.log(trackIndex)
        }
    }

    const toNextTrack = () => {
        if (trackIndex < queue.length - 1) {
            audioRef.current.pause();
            setIsPlaiyng(false)
            setTrackIndex(trackIndex + 1);
        } else {
            audioRef.current.pause();
            setIsPlaiyng(false)
            setTrackIndex(0);
        }
    }

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(() => {
        audioRef.current.pause();
        if (!queue.length) return;
        const song = queue[trackIndex];
        console.log(song)
        audioRef.current = new Audio(`/songs/${song.id}.mp3`);
    }, [trackIndex, queue]);


    const handleClickPlay = () => {
        if (isplaying === false) {
            console.log("playing")
            setIsPlaiyng(true)
        }
        else {
            setIsPlaiyng(false)
        }
    }

    useEffect(() => {
        if (isplaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isplaying]);

    return (
        <div className={classes.footer}>
            <Typography className={classes.song}><b>{queue[trackIndex] === undefined ? "un" : queue[trackIndex].name}</b></Typography>
            <Typography className={classes.artist}>{queue[trackIndex] === undefined ? "un" : queue[trackIndex].artist}</Typography>
            <div className={classes.buttons}>
                <IconButton className={classes.play} onClick={toPrevTrack}><SkipPreviousIcon fontSize="small" /></IconButton>
                <IconButton className={classes.play} onClick={handleClickPlay}>{isplaying === false ? <PlayArrowIcon /> : <PauseIcon />}</IconButton>
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