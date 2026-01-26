import React, { useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import "./EmblaCarousel.css";

interface ScrollCarouselProps {
  slides: ReactNode;
  options?: EmblaOptionsType;
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    ...options 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="scroll-carousel">
      <div className="scroll-carousel__viewport" ref={emblaRef}>
        <div className="scroll-carousel__container">{slides}</div>
      </div>

      <div className="scroll-carousel__controls">
        <button 
          className={`scroll-carousel__button scroll-carousel__button--prev ${
            !prevBtnEnabled ? 'scroll-carousel__button--disabled' : ''
          }`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          ‹
        </button>
        <button 
          className={`scroll-carousel__button scroll-carousel__button--next ${
            !nextBtnEnabled ? 'scroll-carousel__button--disabled' : ''
          }`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          ›
        </button>
      </div>

      <div className="scroll-carousel__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`scroll-carousel__dot ${
              index === selectedIndex ? "scroll-carousel__dot--selected" : ""
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollCarousel;