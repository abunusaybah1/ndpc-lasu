import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 ">
      <div className="hero about-hero flex flex-col items-start justify-between lg:items-center lg:justify-center w-full h-full px-15 py-20 lg:p-25">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          NDPC LASU Chapter
        </h1>
        <p className="mt-4 text-white max-w-md text-lg font-bold">
          Championing Data Privacy Awareness and Protection within Lagos State
          University
        </p>
      </div>
    </section>
  );
};

export default Hero;
