"use client";
import { addToFrontAndEnd } from "@/app/utils/utility-functions";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";
import { GiPauseButton } from "react-icons/gi";

const Slider = ({
  children,
  infinite = true,
  autoPlay = true,
  delay = 1000,
  direction = "forward",
  initialSlide,
  showPlayButton = true,
  showPositionButtons = false,
  showControlButtons = true,
  showPositionIndicator = true,
}: {
  children: React.ReactNode[];
  infinite?: boolean;
  autoPlay?: boolean;
  delay?: number;
  direction?: "forward" | "reverse";
  initialSlide?: number;
  showPlayButton?: boolean;
  showPositionButtons?: boolean;
  showControlButtons?: boolean;
  showPositionIndicator?: boolean;
}) => {
  const scrollBehavior = useRef<"smooth" | "auto">("auto");
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const sliderRef = useRef<HTMLOListElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const slidesBefore = useMemo<number>(
    () => (infinite ? Math.floor(children.length / 2) : 0),
    [children?.length]
  );
  const slidesAfter = useMemo<number>(
    () => (infinite ? Math.ceil(children.length / 2) : 0),
    [children?.length]
  );
  const transitioning = useRef<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const mouseDown = useRef<boolean>(false);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

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

  const scrollTo = (nextSlide: number) => {
    const firstCardWidth = slideRefs.current[0]?.offsetWidth;
    if (firstCardWidth === undefined) return;
    setCurrentSlide(nextSlide);
    sliderRef.current?.scrollTo({
      left: firstCardWidth * nextSlide,
      behavior: scrollBehavior.current,
    });
  };

  const toggleSlide = (nextSlide: number) => {
    if (infinite) {
      if (nextSlide > slides.length - 1) {
        scrollBehavior.current = "auto";
        nextSlide = currentSlide - children.length;
      } else if (nextSlide < 0) {
        scrollBehavior.current = "auto";
        nextSlide = children.length;
      }
      scrollTo(nextSlide);
    } else if (nextSlide <= children.length - 1 && nextSlide >= 0) {
      scrollTo(nextSlide);
    }
  };

  const setFirstSlide = (
    initialSlide: number,
    infinite: boolean,
    slidesBefore: number
  ) => {
    if (infinite) {
      initialSlide = slidesBefore + initialSlide;
    }
    scrollTo(initialSlide);
    return initialSlide;
  };

  const handleMouseDown = () => {
    mouseDown.current = true;
    setScrolling(true);
  };

  const handleScroll = () => {
    if (scrolling) {
      let newSlidePos = Math.round(
        sliderRef.current?.scrollLeft / sliderRef.current?.offsetWidth
      );
      if (newSlidePos !== currentSlide) {
        setCurrentSlide(newSlidePos);
      }

      if (
        sliderRef.current?.offsetWidth * currentSlide ===
        sliderRef.current?.scrollLeft
      ) {
        if (!mouseDown.current) {
          setScrolling(false);
        }
        if (infinite) {
          if (newSlidePos >= slides.length - 1) {
            scrollBehavior.current = "auto";
            newSlidePos = currentSlide - children.length;
            transitioning.current = true;
          } else if (newSlidePos <= 0) {
            scrollBehavior.current = "auto";
            newSlidePos = children.length;
            transitioning.current = true;
          }
          scrollTo(newSlidePos);
        } else if (newSlidePos <= children.length - 1 && newSlidePos >= 0) {
          scrollTo(newSlidePos);
        }
      }
    }
  };

  //Sets the slider position to the scroll position of the initial card, regardless of whether or not the carousel wraps
  useLayoutEffect(() => {
    setFirstSlide(initialSlide ?? 0, infinite, slidesBefore);
  }, []);

  //If the scroll is set to auto, which happens when one end of the slides has been reached when the slides are set to infinite mode, then it will reenable smooth scrolling and go to the target slide
  useEffect(() => {
    if (scrollBehavior.current === "auto") {
      scrollBehavior.current = "smooth";
      if (!transitioning.current) {
        if (currentSlide === slides.length - children.length - 1) {
          toggleSlide(currentSlide + 1);
        } else if (currentSlide === children.length) {
          toggleSlide(currentSlide - 1);
        }
      } else {
        transitioning.current = false;
      }
    }
  }, [currentSlide]);

  //Controls the autoPlaying of the slides, after the delay duration has been reached it will go to the next or previous slide
  useEffect(() => {
    if (!autoPlay || !isPlaying) return;
    const interval = setInterval(() => {
      if (direction === "forward") {
        toggleSlide(currentSlide + 1);
      } else {
        toggleSlide(currentSlide - 1);
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, delay, direction, isPlaying]);

  useEffect(() => {
    window.addEventListener("touchend", () => (mouseDown.current = false));
    return () =>
      window.removeEventListener("touchend", () => (mouseDown.current = false));
  });

  return (
    <div className="slider">
      <div className="controls-container">
        {showPositionIndicator && (
          <div className="position-indicator">
            <p>
              {currentSlide + 1 > children.length
                ? currentSlide - children.length + 1
                : currentSlide + 1}
              /{children.length}
            </p>
          </div>
        )}
        {autoPlay && showPlayButton && (
          <div className="play-button-container">
            <button
              className="play-button"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <h3>{isPlaying ? <GiPauseButton /> : <FaPlay />}</h3>
            </button>
          </div>
        )}
        {showPositionButtons && (
          <div className="position-buttons">
            {children.map((_, index) => {
              return (
                <li
                  key={index}
                  onClick={() => toggleSlide(index + slidesBefore)}
                >
                  <small>{index + 1}</small>
                </li>
              );
            })}
          </div>
        )}
        {showControlButtons && (
          <div className="control-buttons">
            <div className="button-container">
              <button
                className="prev-button control-button"
                onClick={() => toggleSlide(currentSlide - 1)}
              >
                <FaChevronLeft />
              </button>
            </div>
            <div className="button-container">
              <button
                className="next-button control-button"
                onClick={() => toggleSlide(currentSlide + 1)}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
      <ol
        className="slides-container"
        ref={sliderRef}
        onScroll={() => handleScroll()}
        onTouchStart={() => handleMouseDown()}
      >
        {slides}
      </ol>
    </div>
  );
};

export default Slider;

/* Make position buttons later, they are basically mini slides
 which also scroll left and right, and which ever one you click
 on will scroll both the positions buttons and the slider to
 the left or the right depending on the amount  */
