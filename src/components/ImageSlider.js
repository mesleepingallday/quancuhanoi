"use client";
import { useEffect, useRef, useState } from "react";
import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "../constants/images";

export default function ImageSlider({
  imageUrls,
  bigStyle,
  dots = true,
  smallStyle,
  slideStyle,
  imagePerSlide = 1,
}) {
  const className = require("classnames");
  const widthImage = className({
    "w-full": imagePerSlide === 1,
    "w-1/3": imagePerSlide === 3,
  });
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef();
  const swipeStartRef = useRef();
  const isSwipingRef = useRef(false);
  const length = imageUrls.length / imagePerSlide;
  console.log(widthImage);
  function handleBack() {
    setImageIndex((index) => (index === 0 ? length - 1 : index - 1));
  }

  function handleNext() {
    setImageIndex((index) => (index === length - 1 ? 0 : index + 1));
  }
  function autoSlide() {
    intervalRef.current = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }
  const handleSwipeStart = (e) => {
    if (e.type === "touchstart") {
      swipeStartRef.current = e.touches[0].clientX;
      isSwipingRef.current = true;
    } else {
      swipeStartRef.current = e.clientX;
      isSwipingRef.current = true;
    }
  };

  const handleSwipeMove = (e) => {
    if (!isSwipingRef.current) return;
    if (swipeStartRef.current - e.clientX > 150) {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      isSwipingRef.current = false;
    } else if (swipeStartRef.current - e.clientX < -150) {
      setImageIndex(
        (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
      );
      isSwipingRef.current = false;
    }
  };

  const handleSwipeEnd = () => {
    isSwipingRef.current = false;
  };

  useEffect(() => {
    setImageIndex(0);
  }, [imageUrls]);

  return (
    <>
      <div className="relative flex flex-row justify-center items-center ">
        <div className={`relative flex ${slideStyle}`}>
          <IconCircleChevronLeft
            color="white"
            stroke="none"
            className="absolute left-10 top-1/2 size-20 z-10"
            onClick={() => handleBack()}
          />
          <div className={`flex flex-row overflow-hidden ${bigStyle}`}>
            {imageUrls.map((url, idx) => (
              <img
                key={url}
                src={url}
                alt="food"
                style={{
                  transform: `translateX(${
                    -100 * imageIndex * imagePerSlide
                  }%)`,
                }}
                className={`${widthImage}  transition-transform duration-500`}
              />
            ))}
          </div>
          <IconCircleChevronRight
            color="white"
            stroke="none"
            className="absolute right-10 top-1/2 size-20 z-10"
            onClick={() => handleNext()}
          />
        </div>
      </div>

      {dots && (
        <div
          className={`flex flex-row gap-8 justify-center my-10 overflow-hidden`}
        >
          {imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              className={`${smallStyle} ${
                idx === imageIndex ? "border-2 border-[#f0a108]" : ""
              }`}
              onClick={() => setImageIndex(idx)}
              alt="food"
            />
          ))}
        </div>
      )}
    </>
  );
}
