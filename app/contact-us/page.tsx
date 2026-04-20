"use client";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Heading */}
      <section className="py-14 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#07522e]">
          Contact Us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Have questions, inquiries, or want to get involved? Reach out to us.
        </p>
      </section>

      <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#07522e]">
            Get in Touch
            <span className="block h-1 w-12 bg-[#c7252b] mt-2 rounded"></span>
          </h3>

          <div className="bg-white border rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <p className="text-sm mb-2 flex items-center gap-2">
              <BiLocationPlus />
              Lagos State University, Ojo
            </p>
            <p className="text-sm mb-2 flex items-center gap-2">
              <MdEmail />
              info@ndpc-lasu.ng
            </p>
            <p className="text-sm flex items-center gap-2">
              <BsPhone />
              +234 XXX XXX XXXX
            </p>
          </div>

          <p className="text-sm opacity-70">
            We typically respond within 24–48 hours.
          </p>
        </div>

        <form className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none 
              focus:border-[#07522e] focus:ring-1 focus:ring-[#07522e]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none 
              focus:border-[#07522e] focus:ring-1 focus:ring-[#07522e]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none 
              focus:border-[#07522e] focus:ring-1 focus:ring-[#07522e]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c7252b] text-white py-3 rounded-md font-medium 
            hover:bg-[#a61e23] hover:scale-[1.02] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="bg-[#c7252b] text-white py-14 px-6 lg:py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let&nbsp;Build a Privacy-Aware Community
        </h2>

        <p className="max-w-2xl mx-auto">
          Join NDPC LASU Chapter and be part of shaping responsible data usage.
        </p>
      </section>
    </main>
  );
}
