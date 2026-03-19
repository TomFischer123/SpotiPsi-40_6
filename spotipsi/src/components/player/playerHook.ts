import { type Dispatch, type SetStateAction, useState, useRef, useEffect } from "react";


interface Song {
    id: string;
    name: string;
    artist: string;
    album: string;
}

const usePlayerHook = (currentSong: Song | undefined, isPlaying: boolean, setIsPlaying: Dispatch<SetStateAction<boolean>>,
    queue: Song[], setTrackIndex: Dispatch<SetStateAction<number>>, trackIndex: number):
    [handleClickPlay: () => void, toPrevTrack: () => void, toNextTrack: () => void, isPlayingH: boolean,
        trackIndexH: number, duration: number, trackProgress: number] => {
    const [trackProgress, setTrackProgress] = useState(0);
    const audioRef = useRef(new Audio(currentSong ? `/songs/${currentSong.id}.mp3` : ""));
    useEffect(() => {
        if (currentSong) {
            audioRef.current.pause();
            setIsPlaying(false)
            audioRef.current = new Audio(`/songs/${currentSong.id}.mp3`);
        }
    }, [currentSong]);

    const intervalRef = useRef(0);
    const isReady = useRef(false);

    const duration = audioRef.current.duration;

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, 1000);
    }

    const toPrevTrack = () => {
        console.log(trackIndex)
        if (trackIndex - 1 < 0) {
            audioRef.current.pause();
            setIsPlaying(false)
            setTrackIndex(queue.length - 1);

        } else {
            audioRef.current.pause();
            setIsPlaying(false)
            setTrackIndex(prev => prev - 1);
            console.log(trackIndex)
        }
    }

    const toNextTrack = () => {
        if (trackIndex < queue.length - 1) {
            audioRef.current.pause();
            setIsPlaying(false)
            setTrackIndex(trackIndex + 1);
        } else {
            audioRef.current.pause();
            setIsPlaying(false)
            setTrackIndex(0);
        }
    }


    useEffect(() => {
        audioRef.current.pause();
        if (!queue.length) return;
        const song = queue[trackIndex];
        console.log(song)
        audioRef.current = new Audio(`/songs/${song.id}.mp3`);
    }, [trackIndex, queue]);


    const handleClickPlay = () => {
        if (isPlaying === false) {
            console.log("playing")
            setIsPlaying(true)
        }
        else {
            setIsPlaying(false)
        }
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);


    return [handleClickPlay, toPrevTrack, toNextTrack, isPlaying, trackIndex, duration, trackProgress]
}


export default usePlayerHook