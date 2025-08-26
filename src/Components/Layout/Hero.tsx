import React, { useState, useEffect } from "react";
import rabbitHero from "../../assets/rabbit-hero.webp";
import featured from "../../assets/featured.webp";
import mensCollection from "../../assets/mens-collection.webp";
import womensCollection from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const heroImages = [rabbitHero, featured, mensCollection, womensCollection];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      setDirection(1); // always slide right for auto
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length);
        setSliding(false);
      }, 500); // slide duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[400px] md:h-[400px] lg:h-[600px] relative">
        {heroImages.map((img, idx) => {
          let translate = "translate-x-full";
          let z = "z-0";
          if (idx === current) {
            translate = sliding ? "translate-x-0" : "translate-x-0";
            z = "z-10";
          } else if (
            idx === (current - 1 + heroImages.length) % heroImages.length &&
            sliding
          ) {
            translate =
              direction === 1 ? "-translate-x-full" : "translate-x-full";
            z = "z-0";
          }
          return (
            <img
              key={idx}
              src={img}
              alt={`hero-${idx}`}
              className={`w-full h-full object-cover absolute top-0 left-0 transition-transform duration-500 ${translate} ${z}`}
              style={{
                transitionProperty: "transform",
              }}
            />
          );
        })}
        {/* Overlay text always visible and centered, with highest z-index */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center pointer-events-none z-20">
          <div className="text-center text-white/85 p-6 mt-30 pointer-events-auto w-full">
            <h1 className="text-4xl md:text-9xl hero-text tracking-tighter uppercase">
              Summer Style Reloaded
            </h1>
            <p className="text-sm tracking-tighter md:text-lg text-white hero-text">
              Turn up the style while the sun's out — explore cool fits made for
              hot days
            </p>

            <p className="flex mt-25 hero-text items-center justify-center text-lg gap-2 text-white">
              Your refined summer style awaits
              <FaLongArrowAltRight />
              <Link
                to="#"
                className="bg-white text-gray-900 px-4 py-1 rounded-full text-lg hover:bg-black hover:text-white"
              >
                Shop the Heat
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
