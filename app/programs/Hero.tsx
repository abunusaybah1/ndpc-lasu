import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 ">
      <div className="hero program-hero flex flex-col items-start justify-between lg:items-center lg:justify-center w-full h-full px-15 py-20 lg:p-25">
        <h1 className="text-white text-3xl md:text-5xl lg:text-center font-bold mb-4">
          OUR PROGRAMS
        </h1>
        <p className="mt-4 text-white max-w-md text-lg lg:text-center font-bold">
          We run impactful programs designed to educate, empower, and prepare
          students for responsible data usage and careers in data protection.
        </p>
      </div>
    </section>
  );
};

export default Hero;

// #c7252b;
