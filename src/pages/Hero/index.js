"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/carousel.png",
  },
  {
    id: 2,
    image: "/images/carousel4.jpeg",
  },
  {
    id: 3,
    image: "/images/carousel2.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, 
  });

  return (
    <section className="relative w-full overflow-hidden pt-[60px] md:pt-[80px]">
      
      <div
        {...handlers}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              width={1600}
              height={500}
              className="w-full h-[400px] md:h-[520px] object-cover"
            />
          </div>
        ))}
      </div>

      
      <div className="mt-8">
        <div className="bg-gradient-to-r from-[#2b1b14] via-amber-700 to-[#2b1b14] text-white py-4 text-center shadow-md">
          <p className="text-sm md:text-base font-medium tracking-wide">
             All our chocolates are delivered in{" "}
            <span className="font-semibold text-yellow-300">
              temperature-controlled vans 🚚
            </span>{" "}
            so they always arrive{" "}
            <span className="font-semibold text-yellow-300">
              fresh & premium
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
}
