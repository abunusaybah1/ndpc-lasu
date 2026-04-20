"use client";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#07522e]">
          Contact Us
        </h2>
        <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-3 rounded mb-5" />
        <p className="max-w-xl mx-auto text-gray-500 text-sm leading-relaxed">
          Have questions, inquiries, or want to get involved? We&apos;d love to
          hear from you.
        </p>
      </section>

      <section className="pb-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <h3 className="text-2xl font-bold text-[#07522e] mb-2">
              Get in Touch
            </h3>
            <div className="h-1 w-12 bg-[#c7252b] rounded" />
          </div>

          <div className="space-y-4">
            {[
              {
                icon: (
                  <BiLocationPlus className="text-[#c7252b] text-lg shrink-0" />
                ),
                text: "Lagos State University, Ojo, Lagos",
              },
              {
                icon: <MdEmail className="text-[#c7252b] text-lg shrink-0" />,
                text: "info@ndpc-lasu.ng",
              },
              {
                icon: <BsPhone className="text-[#c7252b] text-lg shrink-0" />,
                text: "+234 XXX XXX XXXX",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#07522e]/5 border border-[#07522e]/10 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#07522e]">
                Response time:
              </span>{" "}
              We typically respond within 24&dash;48 hours during business days.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#c7252b] text-white py-3.5 rounded-lg font-bold text-sm hover:bg-[#a61e23] hover:scale-[1.01] transition-all duration-200 tracking-wide"
          >
            Send Message
          </button>
        </div>
      </section>

      <section className="bg-[#c7252b] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Let&apos;s Build a Privacy-Aware Community
        </h2>
        <p className="max-w-xl mx-auto opacity-90 text-sm leading-relaxed">
          Join NDPC LASU Chapter and be part of shaping responsible data usage
          across Lagos State University.
        </p>
      </section>
    </main>
  );
}
