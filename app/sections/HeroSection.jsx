"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Brown Overlay */}
      <div className="absolute inset-0 bg-[#6D3F25]/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Rooted in Quality
        </h1>

        <p className="text-gray-200 mt-6 max-w-2xl text-base md:text-lg">
          Experience premium craftsmanship and authenticity. Built with passion.
          Designed for excellence.
        </p>

        <div className="mt-8">
          <button className="bg-white text-[#6D3F25] px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
