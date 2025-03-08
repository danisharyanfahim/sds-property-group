"use client";
import React, { useState } from "react";

const FlipCard = ({
  front,
  back,
}: {
  front: React.ReactNode | React.ReactNode[];
  back: React.ReactNode | React.ReactNode[];
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};

export default FlipCard;
