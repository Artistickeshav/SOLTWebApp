"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  "/images/historical/service-11.webp",
  "/images/historical/service-08.webp",
  "/images/historical/service-02.webp",
  "/images/historical/service-05.webp",
  "/images/historical/service-14.webp",
  "/images/historical/service-13.webp",
];

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-image" aria-hidden="true">
      {heroSlides.map((src, index) => (
        <div className={`hero-slide${index === activeIndex ? " is-active" : ""}`} key={src}>
          <Image src={src} alt="" fill priority={index === 0} sizes="100vw" />
        </div>
      ))}
      <div className="hero-pagination" role="group" aria-label="Choose hero image">
        {heroSlides.map((src, index) => (
          <button
            className={`hero-pagination-dot${index === activeIndex ? " is-active" : ""}`}
            key={src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
