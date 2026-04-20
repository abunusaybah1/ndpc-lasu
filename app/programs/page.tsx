import Hero from "./Hero";

export default function ProgramsPage() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />

      <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Digital Privacy Awareness Campaign (DPAC)",
            desc: "Campus-wide campaigns educating students on data rights and online safety.",
          },
          {
            title: "Data Protection Training & Certification",
            desc: "Hands-on training introducing compliance, privacy laws, and career paths.",
          },
          {
            title: "IMPACT Webinars & Workshops",
            desc: "Sessions focused on compliance, audits, and industry trends.",
          },
          {
            title: "Student Ambassadors Program",
            desc: "Training student leaders to promote data privacy across campus.",
          },
          {
            title: "Privacy Breach Training",
            desc: "Learn how to identify, prevent, and report data breaches.",
          },
          {
            title: "Hackathons & Innovation Events",
            desc: "Build real-world solutions focused on data protection and security.",
          },
        ].map((program, i) => (
          <div
            key={i}
            className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#07522e] group-hover:text-green-700 transition">
              {program.title}
            </h3>

            <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition">
              {program.desc}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#07522e]">
            Why It Matters
          </h2>

          <p className="leading-relaxed max-w-2xl mx-auto">
            Our programs align with Nigeria’s data protection goals—ensuring
            students understand privacy, compliance, and how to operate safely
            in a digital world.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-14 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>

        <p className="mb-6 opacity-90">
          Join a program and become part of the data privacy movement in LASU.
        </p>

        <button className="bg-white text-green-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 hover:scale-105 transition duration-300">
          Join a Program
        </button>
      </section>
    </main>
  );
}
