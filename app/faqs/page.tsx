"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the NDPC LASU Chapter?",
    answer:
      "It is a student-driven body promoting data privacy awareness and compliance within Lagos State University.",
  },
  {
    question: "Who can join the NDPC LASU Chapter?",
    answer:
      "All LASU students interested in data protection, cybersecurity, or digital rights can join.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Our programs are designed for both beginners and advanced learners.",
  },
  {
    question: "How can I report a data breach?",
    answer:
      "You can report through our official channels or attend our training sessions to learn proper procedures.",
  },
];

export default function FaqCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % faqs.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#07522e]">
          Frequently Asked Questions
        </h2>
        <span className="block h-1 w-12 bg-[#c7252b] mx-auto mt-2 rounded"></span>

        {/* Card */}
        <div className="mt-10 bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]hover:shadow-[0_10px_30px_rgba(199,37,43,0.2)] transition duration-300">
          <h3 className="text-xl font-semibold text-[#07522e] mb-4">
            {faqs[index].question}
          </h3>

          <p className="text-sm leading-relaxed opacity-80">
            {faqs[index].answer}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-md border border-[#07522e] text-[#07522e] hover:bg-[#07522e] hover:text-white transition"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {faqs.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-[#c7252b] scale-125" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={next}
            className="px-4 py-2 rounded-md border border-[#c7252b] text-[#c7252b]
            hover:bg-[#c7252b] hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
