import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "../constants/images";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export function Carousel({
  dots = "",
  style = "",
  images,
  perView = 1,
  spacing = 0,
}) {
  const [opacities, setOpacities] = React.useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        origin: "center",
        perView: perView,
        spacing: spacing,
        number: images.length,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div>
      <div ref={sliderRef} className="flex flex-row fader ">
        {Object.entries(images).map(([key, value], idx) => (
          <div
            key={idx}
            className={`keen-slider__slide number-slide${
              idx + 1
            } h-full w-auto`}
            style={{ opacity: opacities[idx] }}
          >
            <img
              className={`w-full h-full ${style}`}
              src={value.src}
              alt="image slider"
            />
          </div>
        ))}
        {loaded && instanceRef.current && (
          <>
            <IconCircleChevronLeft
              color="white"
              stroke="none"
              className="h-10 w-10 absolute  top-1/2 left-10 z-10"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            <IconCircleChevronRight
              color="white"
              stroke="none"
              className="absolute h-15 w-15 size-10 top-1/2 right-10 z-10"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
      {dots && loaded && instanceRef.current && (
        <div className={`dots transform translate-x-1/2 pb-5`}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
