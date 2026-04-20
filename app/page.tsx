import Link from "next/link";
import { BiArrowToRight, BiShieldPlus } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";

const highlights = [
  {
    icon: <FaGraduationCap className="fill-[#c7252b]" />,
    title: "Student-Led",
    desc: "Driven by LASU students passionate about digital rights.",
  },
  {
    icon: <BiShieldPlus className="fill-[#c7252b]" />,
    title: "NDPC Backed",
    desc: "Aligned with Nigeria's Data Protection Act (2023).",
  },
  {
    icon: <RiCommunityFill className="fill-[#c7252b]" />,
    title: "Community Focus",
    desc: "Educating staff, students, and the wider university community.",
  },
];

const programs = [
  {
    title: "Digital Privacy Awareness Campaign",
    desc: "Campus-wide campaigns educating students on data rights and online safety.",
  },
  {
    title: "Data Protection Training",
    desc: "Hands-on training introducing compliance, privacy laws, and career paths.",
  },
  {
    title: "Student Ambassadors Program",
    desc: "Training student leaders to champion data privacy across campus.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <section className="hero landing-hero relative w-full min-h-[90vh] flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c7252b] bg-white px-3 py-1.5 rounded-full mb-6">
            NDPC LASU Chapter
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
            Protecting Your <br />
            <span className="text-[#f9c2c4]">Digital Rights</span> at LASU
          </h1>
          <p className="text-white/80 text-lg max-w-lg leading-relaxed mb-10">
            Promoting data protection awareness, compliance, and digital
            responsibility among students of Lagos State University.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/join-us"
              className="bg-[#c7252b] text-white font-bold px-7 py-3.5 rounded-md text-sm hover:bg-[#a61e23] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#c7252b]/30"
            >
              Join the Chapter
            </Link>
            <Link
              href="/about-us"
              className="flex gap-2 items-center bg-white/10 backdrop-blur border border-white/30 text-white font-bold px-7 py-3.5 rounded-md text-sm hover:bg-white/20 hover:scale-105 transition-all duration-200"
            >
              Learn More <BiArrowToRight className="mt-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(7,82,46,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-[#07522e] font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07522e] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
            <div className="h-1 w-12 bg-[#c7252b] rounded mb-6" />
            <p className="text-white/80 leading-relaxed mb-4">
              The NDPC LASU Chapter is a student-driven extension of the Nigeria
              Data Protection Commission, committed to promoting data privacy
              awareness, education, and compliance within Lagos State
              University.
            </p>
            <p className="text-white/80 leading-relaxed">
              We serve as a platform for sensitizing students, staff, and the
              university community on protecting personal data and respecting
              privacy rights in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Data Privacy", "Compliance", "Digital Rights", "Education"].map(
              (tag) => (
                <div
                  key={tag}
                  className="bg-white/10 border border-white/20 rounded-xl p-5 text-center"
                >
                  <p className="text-white font-semibold text-sm">{tag}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#07522e]">Our Programs</h2>
          <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-2 rounded" />
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
            Impactful initiatives designed to educate and empower students in
            data protection.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {programs.map((p, i) => (
            <div
              key={i}
              className="group border border-gray-100 rounded-xl p-6 hover:border-[#07522e]/30 hover:shadow-[0_8px_24px_rgba(7,82,46,0.1)] transition-all duration-300"
            >
              <div className="w-8 h-8 bg-[#07522e]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#07522e] transition-colors duration-300">
                <span className="text-[#07522e] group-hover:text-white text-xs font-bold transition-colors duration-300">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-bold text-[#07522e] mb-2 text-sm leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-block border-2 border-[#07522e] text-[#07522e] font-bold px-6 py-3 rounded-md text-sm hover:bg-[#07522e] hover:text-white transition-all duration-200"
          >
            View All Programs →
          </Link>
        </div>
      </section>

      <section className="bg-[#c7252b] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Together, We Protect Data</h2>
        <p className="mb-8 opacity-90 max-w-lg mx-auto text-sm leading-relaxed">
          Join the NDPC LASU Chapter and be part of the movement for digital
          privacy awareness and responsible data usage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/join-us"
            className="bg-white text-[#c7252b] font-bold px-7 py-3.5 rounded-md text-sm hover:scale-105 transition-all duration-200"
          >
            Join the Chapter
          </Link>
          <Link
            href="/about-us"
            className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-md text-sm hover:bg-white hover:text-[#c7252b] transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
