"use client";
import { addToFrontAndEnd } from "@/app/utils/utility-functions";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoMdPlay, IoMdPause } from "react-icons/io";

/* 
This is a static ticker, meaning you wont be able to scroll left or right, the only thing you can do is pause it
I will add the control functions and ability to drag and scroll later on 

*/
const Ticker = ({
  children,
  infinite = true,
  autoPlay = true,
  direction = "forward",
  speed = 0.25,
  initialSlide,
  showPlayButton = true,
  pauseOnHover = true,
}: {
  children: React.ReactNode[];
  infinite?: boolean;
  autoPlay?: boolean;
  delay?: number;
  speed?: number;
  direction?: "forward" | "reverse";
  initialSlide?: number;
  showPlayButton?: boolean;
  showPositionButtons?: boolean;
  showControlButtons?: boolean;
  showPositionIndicator?: boolean;
  pauseOnHover?: boolean;
}) => {
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const tickerRef = useRef<HTMLOListElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const slidesBefore = useMemo<number>(
    () => (infinite ? Math.floor(children.length / 2) : 0),
    [children?.length]
  );
  const slidesAfter = useMemo<number>(
    () => (infinite ? Math.ceil(children.length / 2) : 0),
    [children?.length]
  );
  const [offsetX, setOffsetX] = useState<number>(0);

  const slides = useMemo(() => {
    if (infinite) {
      children = addToFrontAndEnd(slidesBefore, slidesAfter, children);
    }
    let slides = children.map((child, index) => {
      return (
        <li
          className="slide-container"
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          key={index}
        >
          {child}
        </li>
      );
    });
    return slides;
  }, [children]);

  const tick = (direction: string) => {
    let newPosition =
      direction === "forward" ? offsetX + speed : offsetX - speed;
    newPosition = clamp(newPosition);
    tickerRef.current?.scrollTo({
      left: Math.round(newPosition),
    });
    setOffsetX(newPosition);
  };

  const clamp = (newPosition: number): number => {
    const tickerWidth = tickerRef.current!.offsetWidth;
    const tickerScrollWidth = tickerRef.current!.scrollWidth;

    if (infinite) {
      if (newPosition >= tickerScrollWidth - tickerWidth) {
        newPosition -= tickerScrollWidth / 2;
      } else if (newPosition <= 0) {
        newPosition += tickerScrollWidth / 2;
      }
    } else {
      if (newPosition <= 0) {
        newPosition = 0;
      } else if (newPosition >= tickerScrollWidth - tickerWidth) {
        newPosition = tickerScrollWidth - tickerWidth;
      }
    }
    return newPosition;
  };

  const setFirstSlide = (
    initialSlide: number,
    infinite: boolean,
    slidesBefore: number
  ) => {
    const slideWidth = slideRefs.current[0]?.offsetWidth;
    if (slideWidth === undefined) return;
    if (infinite) {
      initialSlide = slidesBefore + initialSlide;
    }
    const newPosition = initialSlide * slideWidth;
    tickerRef.current?.scrollTo({
      left: Math.round(newPosition),
    });
    setOffsetX(newPosition);
  };

  const handleMouseOver = () => {
    if (autoPlay && isPlaying) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (autoPlay && isPlaying) {
      setIsHovered(false);
    }
  };
  //Sets the ticker position to the scroll position of the initial slide, regardless of whether or not the ticker wraps
  useLayoutEffect(() => {
    setFirstSlide(initialSlide ?? 0, infinite, slidesBefore);
  }, []);

  //Controls the autoPlaying of the slides, after the delay duration has been reached it will go to the next or previous slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay && isPlaying && !isHovered) {
        tick(direction);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [offsetX, speed, direction, isPlaying, autoPlay, isHovered]);

  return (
    <div
      className="ticker"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="controls-container">
        {autoPlay && showPlayButton && (
          <div className="play-button-container">
            <button
              className="play-button"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <h3>{isPlaying ? <IoMdPause /> : <IoMdPlay />}</h3>
            </button>
          </div>
        )}
      </div>
      <ol className="slides-container" ref={tickerRef}>
        {slides}
      </ol>
    </div>
  );
};

export default Ticker;

/* Make position buttons later, they are basically mini slides
 which also scroll left and right, and which ever one you click
 on will scroll both the positions buttons and the slider to
 the left or the right depending on the amount  */
