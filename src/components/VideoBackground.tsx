"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay

  // Initialize video settings
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video loops and plays
      video.loop = true;
      // Start muted for autoplay (browser requirement)
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("webkit-playsinline", "true");
      video.volume = 0.5; // Set volume to 50%
      
      // Sync state with video element
      setIsMuted(video.muted);
      
      // Handle video loaded
      const handleLoadedData = () => {
        setIsLoaded(true);
        video.play().catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      };
      
      // Handle video error
      const handleError = (e: Event) => {
        console.error("Video error:", e);
      };
      
      // Listen for volume/mute changes
      const handleVolumeChange = () => {
        setIsMuted(video.muted);
      };
      
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);
      video.addEventListener("volumechange", handleVolumeChange);
      
      // Try to play immediately (muted for autoplay)
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video is playing");
            setIsLoaded(true);
          })
          .catch((error) => {
            console.log("Video autoplay failed:", error);
            // Try to play on user interaction (will be muted initially)
            const handleInteraction = () => {
              video.play().catch(() => {});
              document.removeEventListener("click", handleInteraction);
              document.removeEventListener("touchstart", handleInteraction);
            };
            document.addEventListener("click", handleInteraction);
            document.addEventListener("touchstart", handleInteraction);
          });
      }
      
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
        video.removeEventListener("volumechange", handleVolumeChange);
      };
    }
  }, []);

  // Handle mute state changes - sync React state with video element
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.muted !== isMuted) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) {
      console.error("Video ref is null");
      return;
    }
    
    // Toggle directly on video element first (more reliable)
    const newMutedState = !video.muted;
    video.muted = newMutedState;
    
    // Update React state to reflect the change
    setIsMuted(newMutedState);
    
    // If unmuting, ensure video is playing and volume is set
    if (!newMutedState) {
      video.volume = 0.5;
      // Try to play with sound
      video.play().catch((error) => {
        console.log("Failed to play video with sound:", error);
        // If autoplay fails, reset to muted
        video.muted = true;
        setIsMuted(true);
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source src="/video/infinity_castle_theme.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay - darker at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
          {/* Radial gradient overlay for center focus */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Mute/Unmute Toggle Button - Outside container to ensure clickability */}
      <button
        type="button"
        onClick={toggleMute}
        className="fixed bottom-8 left-8 z-[100] w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-white/20 cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 pointer-events-none" />
        ) : (
          <Volume2 className="w-5 h-5 pointer-events-none" />
        )}
      </button>
    </>
  );
}

