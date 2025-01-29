"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdPlay, IoMdPause } from "react-icons/io";

/* 
// -infinite/wrapping
// -left/right buttons
// -autoplay + button
// -reverse
// -position indicators
// -position buttons
-smooth sliding transition effect 
-appearing and disappearing slide animations such as fading
-mouse over pause/autoPause
*/

const SlideShow = ({
  children,
  infinite = true,
  autoPlay = true,
  delay = 1000,
  direction = "forward",
  initialSlide,
  showPlayButton = true,
  showPositionButtons = true,
  showControlButtons = true,
  showPositionIndicator = true,
}: {
  children: React.ReactNode[];
  infinite: boolean;
  autoPlay?: boolean;
  delay?: number;
  direction?: "forward" | "reverse";
  initialSlide?: number;
  showPlayButton?: boolean;
  showControlButtons?: boolean;
  showPositionIndicator?: boolean;
  showPositionButtons?: boolean;
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide ?? 0);
  const lastSlide = useRef<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

  const slides = useMemo(() => {
    return children.map((child, index) => {
      return (
        <li className="slide-container" key={index}>
          {child}
        </li>
      );
    });
  }, [children]);

  const clamp = (nextSlide: number): number => {
    if (infinite) {
      if (nextSlide < 0) {
        nextSlide = slides.length - 1;
      } else if (nextSlide > slides.length - 1) {
        nextSlide = 0;
      }
    } else {
      if (nextSlide < 0) {
        nextSlide = 0;
      } else if (nextSlide > slides.length - 1) {
        nextSlide = slides.length - 1;
      }
    }
    return nextSlide;
  };

  const toggleSlide = (nextSlide: number) => {
    nextSlide = clamp(nextSlide);
    lastSlide.current = currentSlide;
    setCurrentSlide(nextSlide);
  };

  const togglePause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay && isPlaying) {
        if (direction === "forward") {
          toggleSlide(currentSlide + 1);
        } else {
          toggleSlide(currentSlide - 1);
        }
      }
    }, delay);
    return () => clearInterval(interval);
  }, [currentSlide, autoPlay, isPlaying, delay]);

  return (
    <section className="slide-show">
      <div className="controls-container">
        {showPositionIndicator && (
          <div className="position-indicator">
            <p>
              {currentSlide + 1}/{slides.length}
            </p>
          </div>
        )}
        {autoPlay && showPlayButton && (
          <div className="play-button-container">
            <button className="play-button" onClick={togglePause}>
              <h3>{isPlaying ? <IoMdPause /> : <IoMdPlay />}</h3>
            </button>
          </div>
        )}
        {showPositionButtons && (
          <ol className="position-buttons">
            {slides.map((_, index) => (
              <li
                key={index}
                onClick={() => toggleSlide(index)}
                className={`position-button ${
                  currentSlide === index ? "active" : ""
                }`}
              >
                {/* <p>{index + 1}</p> */}
              </li>
            ))}
          </ol>
        )}
        {showControlButtons && (
          <div className="control-buttons">
            <div className="button-container">
              <button
                className="next-button control-button"
                onClick={() => toggleSlide(currentSlide - 1)}
              >
                <MdKeyboardArrowLeft />
              </button>
            </div>
            <div className="button-container">
              <button
                className="prev-button control-button"
                onClick={() => toggleSlide(currentSlide + 1)}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="slides-container">
        <ol className="slides">
          {slides.map((slide, index) => {
            if (index === lastSlide.current) {
              return (
                <div className="prev-slide-container" key={index}>
                  {slide}
                </div>
              );
            } else if (index === currentSlide) {
              return (
                <div className="current-slide-container" key={index}>
                  {slide}
                </div>
              );
            } else {
              return <div key={index} style={{ display: "none" }}></div>;
            }
          })}
        </ol>
      </div>
    </section>
  );
};

export default SlideShow;
