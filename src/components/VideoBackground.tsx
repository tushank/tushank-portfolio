"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video loops and plays
      video.loop = true;
      // Start muted for autoplay (browser requirement)
      video.muted = isMuted;
      video.playsInline = true;
      video.setAttribute("webkit-playsinline", "true");
      video.volume = 0.5; // Set volume to 50%
      
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
      
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);
      
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
              setHasUserInteracted(true);
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
      };
    }
  }, [isMuted]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
      setHasUserInteracted(true);
    }
  };

  return (
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
      
      {/* Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-white/20"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

