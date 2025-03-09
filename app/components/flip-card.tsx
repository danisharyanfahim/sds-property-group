"use client";
import React, { useState } from "react";

const FlipCard = ({
  front,
  back,
  icon,
  backgroundImage,
}: {
  front: React.ReactNode | React.ReactNode[];
  back: React.ReactNode | React.ReactNode[];
  icon: React.ReactNode;
  backgroundImage: string;
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className="front"
        style={{
          backgroundImage: `linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url(${backgroundImage})`,
        }}
      >
        <div className="content-container">
          {icon}
          {front}
        </div>
        <div className="background-icon">{icon}</div>
      </div>
      <div
        className="back"
        style={{
          backgroundImage: `linear-gradient(135deg, var(--card-color-3), var(--card-color-4)), url(${backgroundImage})`,
        }}
      >
        {back}
      </div>
    </div>
  );
};

export default FlipCard;
