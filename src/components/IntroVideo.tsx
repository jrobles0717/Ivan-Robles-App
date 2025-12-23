import React from "react";

interface IntroVideoProps {
  onVideoEnd: () => void;
  videoSrc: string;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd, videoSrc }) => {
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
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip button with responsive positioning */}
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
