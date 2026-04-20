"use client";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const faqs = [
  {
    question: "What is the NDPC LASU Chapter?",
    answer:
      "It is a student-driven body promoting data privacy awareness and compliance within Lagos State University, working in alignment with the Nigeria Data Protection Commission.",
  },
  {
    question: "Who can join the NDPC LASU Chapter?",
    answer:
      "All LASU students interested in data protection, cybersecurity, or digital rights are welcome to join — regardless of faculty or department.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Our programs are designed for both beginners and advanced learners. We welcome everyone who is curious about data rights and digital privacy.",
  },
  {
    question: "How can I report a data breach?",
    answer:
      "You can report through our official channels or attend our training sessions to learn the proper procedures for identifying and reporting data breaches.",
  },
];

export default function FaqCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % faqs.length);
  const prev = () => setIndex((prev) => (prev - 1 + faqs.length) % faqs.length);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#07522e]">
          Frequently Asked Questions
        </h2>
        <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-2 rounded mb-12" />

        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c7252b] mb-4">
            {index + 1} of {faqs.length}
          </span>
          <h3 className="text-xl font-bold text-[#07522e] mb-5 leading-snug">
            {faqs[index].question}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {faqs[index].answer}
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-[#07522e] text-[#07522e] flex items-center justify-center hover:bg-[#07522e] hover:text-white transition-all duration-200 font-bold"
            aria-label="Previous"
          >
            <BsArrowLeft />
          </button>

          <div className="flex gap-2 items-center">
            {faqs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === index
                    ? "bg-[#c7252b] w-6 h-2"
                    : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-[#c7252b] text-[#c7252b] flex items-center justify-center hover:bg-[#c7252b] hover:text-white transition-all duration-200 font-bold"
            aria-label="Next"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
