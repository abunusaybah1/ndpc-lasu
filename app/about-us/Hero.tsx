import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 ">
      <div className="hero about-hero flex flex-col items-start justify-between lg:items-center lg:justify-center w-full h-full px-15 py-20 lg:p-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          NDPC LASU Chapter
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Championing Data Privacy Awareness and Protection within Lagos State
          University
        </p>
      </div>
    </section>
  );
};

export default Hero;
