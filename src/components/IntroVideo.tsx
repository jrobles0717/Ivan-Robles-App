import React, { useEffect, useRef, useState } from "react";

interface IntroVideoProps {
  onVideoEnd: () => void;
  videoSrc: string;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    // Auto-skip after 8s max so a slow mobile connection never gets stuck
    const timeout = setTimeout(onVideoEnd, 8000);
    return () => clearTimeout(timeout);
  }, [onVideoEnd]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setCanPlay(true)}
        onEnded={onVideoEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: canPlay ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <button
        onClick={onVideoEnd}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "white",
          border: "1px solid white",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          zIndex: 10000,
        }}
      >
        Skip Intro
      </button>
    </div>
  );
};

export default IntroVideo;
