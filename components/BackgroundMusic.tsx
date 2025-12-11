
import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  isPlaying: boolean;
  src: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isPlaying, src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Set initial volume to 0 for fade in
      audio.volume = 0;
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Fade In Logic
            if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
            
            let vol = 0;
            const targetVolume = 0.4; // Max volume (not too loud)
            
            fadeIntervalRef.current = window.setInterval(() => {
              if (vol < targetVolume) {
                vol += 0.02;
                // Clamp to target to avoid precision errors
                if (vol > targetVolume) vol = targetVolume;
                if (audio) audio.volume = vol;
              } else {
                if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
              }
            }, 100);
          })
          .catch((error) => {
            console.warn("Auto-play prevented:", error);
          });
      }
    } else {
      // Immediate pause for responsiveness
      audio.pause();
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    }

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, [isPlaying]);

  return (
    <audio 
      ref={audioRef} 
      src={src} 
      loop 
      crossOrigin="anonymous" 
      preload="auto"
    />
  );
};

export default BackgroundMusic;
