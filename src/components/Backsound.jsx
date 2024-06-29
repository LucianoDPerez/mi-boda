import React, { useEffect, useRef, useState } from "react";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";

const Backsound = () => {
    const audioRef = useRef(null);
    const containerRef = useRef(null);
    const [isPlay, setPlay] = useState(false);
    const [constraints, setConstraints] = useState({});
    const [userInteracted, setUserInteracted] = useState(false);

    const toggleAudio = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay((prevState) => !prevState);
        setUserInteracted(true);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const attemptAutoplay = async () => {
            try {
                await audio.play();
                setPlay(true);
                setUserInteracted(true);
            } catch (error) {
                console.log("Autoplay prevented. User interaction required.");
            }
        };

        attemptAutoplay();

        const handlePlay = () => {
            setPlay(true);
        };

        audio.addEventListener("play", handlePlay);
        return () => {
            audio.removeEventListener("play", handlePlay);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const domRect = containerRef.current.getBoundingClientRect();
            const { top, bottom, left, right } = domRect;
            setConstraints({
                top: -top,
                bottom: window.innerHeight - bottom,
                left: -left,
                right: window.innerWidth - right,
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {!userInteracted && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2001,
                    }}
                    onClick={toggleAudio}
                >
                    <Box
                        sx={{
                            backgroundColor: 'black',
                            padding: 3,
                            borderRadius: 2,
                            textAlign: 'center',
                        }}
                    >
                        <h2>¡Hola amigos, los invitamos a...!</h2>
                        <p></p>
                    </Box>
                </Box>
            )}
            <Box
                ref={containerRef}
                component={motion.div}
                drag
                dragConstraints={constraints}
                boxShadow={8}
                sx={{
                    position: "fixed",
                    zIndex: 2000,
                    top: "40%",
                    left: 10,
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(213, 206, 163, 0.7)",
                    borderRadius: "50%",
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <audio
                    ref={audioRef}
                    preload="true"
                    loop
                    style={{ display: "none" }}
                >
                    <source src="/assets/audio/backsound.mp3" type="audio/mp3" />
                </audio>
                <IconButton
                    onClick={toggleAudio}
                    color="secondary"
                    sx={{ backgroundColor: "text.primary" }}
                    aria-label="Play button"
                    id="playButton"
                    role="button"
                    title="Play button"
                    size="small"
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isPlay ? <PauseTwoToneIcon /> : <PlayArrowTwoToneIcon />}
                </IconButton>
            </Box>
        </>
    );
};

export default Backsound;