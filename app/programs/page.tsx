import Link from "next/link";
import { AiFillBulb } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";

const programs = [
  {
    title: "Digital Privacy Awareness Campaign (DPAC)",
    desc: "Campus-wide campaigns educating students on data rights and online safety.",
    icon: <BsMegaphone className="fill-[#c7252b]" />,
  },
  {
    title: "Data Protection Training & Certification",
    desc: "Hands-on training introducing compliance, privacy laws, and career paths.",
    icon: <GrCertificate className="fill-[#c7252b]" />,
  },
  {
    title: "IMPACT Webinars & Workshops",
    desc: "Sessions focused on compliance, audits, and industry trends.",
    icon: <GiTeacher className="fill-[#c7252b]" />,
  },
  {
    title: "Student Ambassadors Program",
    desc: "Training student leaders to promote data privacy across campus.",
    icon: <MdLeaderboard className="fill-[#c7252b]" />,
  },
  {
    title: "Privacy Breach Training",
    desc: "Learn how to identify, prevent, and report data breaches.",
    icon: <BiLock className="fill-[#c7252b]" />,
  },
  {
    title: "Hackathons & Innovation Events",
    desc: "Build real-world solutions focused on data protection and security.",
    icon: <AiFillBulb className="fill-[#c7252b]" />,
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="hero program-hero relative w-full min-h-[50vh] flex flex-col items-start justify-center px-8 md:px-16 lg:items-center lg:text-center py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c7252b] bg-white px-3 py-1.5 rounded-full mb-6">
            What We Do
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Programs
          </h1>
          <p className="text-white text-lg max-w-md leading-relaxed">
            Impactful programs designed to educate, empower, and prepare
            students for responsible data usage and careers in data protection.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-xl p-7
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_10px_30px_rgba(7,82,46,0.12)]
                hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{program.icon}</span>
              <h3 className="text-[#07522e] font-bold text-base mb-2 leading-snug group-hover:text-[#055e34] transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07522e] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Why It Matters</h2>
          <div className="h-1 w-12 bg-[#c7252b] mx-auto rounded mb-6" />
          <p className="text-white/80 leading-relaxed">
            Our programs align with Nigeria&apos;s data protection goals —
            ensuring students understand privacy, compliance, and how to operate
            safely in a digital world.
          </p>
        </div>
      </section>

      <section className="bg-[#c7252b] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Get Involved</h2>
        <p className="mb-8 opacity-90 max-w-md mx-auto text-sm">
          Join a program and become part of the data privacy movement in LASU.
        </p>
        <Link
          href="/join-us"
          className="inline-block bg-white text-[#c7252b] font-bold px-7 py-3.5 rounded-md text-sm hover:scale-105 transition-all duration-200"
        >
          Join a Program
        </Link>
      </section>
    </main>
  );
}
