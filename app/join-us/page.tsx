import Link from "next/link";
import { AiFillBulb } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";

const programs = [
  {
    icon: <BsMegaphone className="fill-[#c7252b]" />,
    title: "Digital Privacy Awareness Campaign (DPAC)",
    desc: "Help run campus-wide campaigns that educate students on data rights and online safety.",
    spots: "Open",
  },
  {
    icon: <GrCertificate className="fill-[#c7252b]" />,
    title: "Data Protection Training & Certification",
    desc: "Participate in hands-on training on compliance, privacy laws, and data protection careers.",
    spots: "Open",
  },
  {
    icon: <GiTeacher className="fill-[#c7252b]" />,
    title: "IMPACT Webinars & Workshops",
    desc: "Contribute to sessions focused on compliance, audits, and industry trends.",
    spots: "closed",
  },
  {
    icon: <MdLeaderboard className="fill-[#c7252b]" />,
    title: "Student Ambassadors Program",
    desc: "Become a trained leader championing data privacy across faculties and departments.",
    spots: "Limited",
  },
  {
    icon: <BiLock className="fill-[#c7252b]" />,
    title: "Privacy Breach Training",
    desc: "Learn how to identify, prevent, and report data breaches in your community.",
    spots: "Open",
  },
  {
    icon: <AiFillBulb className="fill-[#c7252b]" />,
    title: "Hackathons & Innovation Events",
    desc: "Build real-world solutions focused on data protection and digital security.",
    spots: "closed",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose a Program",
    desc: "Browse our programs and pick the one that fits your passion.",
  },
  {
    step: "02",
    title: "Fill the Form",
    desc: "Complete the expression of interest form below with your details.",
  },
  {
    step: "03",
    title: "Get Onboarded",
    desc: "Our team will reach out within 48 hours to confirm your spot.",
  },
];

export default function JoinProgramPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-[#07522e] py-20 px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c7252b] bg-white px-3 py-1.5 rounded-full mb-6">
            Get Involved
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Join a Program
          </h1>
          <p className="text-white text-base max-w-xl mx-auto leading-relaxed">
            Become an active member of the NDPC LASU Chapter. Whether
            you&apos;re passionate about raising awareness, educating peers, or
            advocating for data privacy rights — there&apos;s a place for you
            here.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07522e]">How It Works</h2>
          <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-2 rounded" />
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-[#07522e]/8 border-2 border-[#07522e]/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-[#07522e] font-black text-sm tracking-wider">
                  {s.step}
                </span>
              </div>
              <h3 className="font-bold text-[#07522e] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07522e] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Available Programs
            </h2>
            <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-2 rounded mb-4" />
            <p className="text-sm text-white max-w-lg mx-auto">
              Select the program you&apos;re most interested in when filling the
              form below.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(7,82,46,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      p.spots === "Limited"
                        ? "bg-[#c7252b]/10 text-[#c7252b]"
                        : "bg-[#07522e]/10 text-[#07522e]"
                    }`}
                  >
                    {p.spots}
                  </span>
                </div>
                <h3 className="font-bold text-[#07522e] text-sm leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#07522e]">
            Expression of Interest
          </h2>
          <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-2 rounded mb-4" />
          <p className="text-sm text-gray-500">
            Fill out the form and we&apos;ll get back to you within 48 hours.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              LASU Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="yourname@lasu.edu.ng"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              Faculty / Department <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Faculty of Law"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              Program of Interest <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all text-gray-600 bg-white">
              <option value="">Select a program</option>
              {programs.map((p, i) => (
                <option key={i} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
              Why do you want to join? <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell us a bit about your interest in data privacy..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#07522e] focus:ring-2 focus:ring-[#07522e]/10 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c7252b] text-white py-3.5 rounded-lg font-bold text-sm
              hover:bg-[#a61e23] hover:scale-[1.01] transition-all duration-200 tracking-wide"
          >
            Submit Expression of Interest
          </button>
        </div>
      </section>

      <section className="bg-[#c7252b] text-white py-14 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Have Questions First?</h2>
        <p className="opacity-90 text-sm mb-7 max-w-md mx-auto">
          Reach out to us before applying and we&apos;ll be happy to guide you
          to the right program.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-[#c7252b] font-bold px-7 py-3.5 rounded-md text-sm hover:scale-105 transition-all duration-200"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
