import Hero from "./Hero";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />

      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#07522e] relative inline-block">
          Who We Are
          <span className="block h-1 w-12 bg-green-600 mt-2 rounded"></span>
        </h2>

        <p className="mb-4 leading-relaxed hover:text-gray-900 transition duration-300">
          The NDPC LASU Chapter is a student-driven extension of the Nigeria
          Data Protection Commission (NDPC), committed to promoting data privacy
          awareness, education, and compliance within Lagos State University.
        </p>

        <p className="leading-relaxed hover:text-gray-900 transition duration-300">
          In alignment with the Nigeria Data Protection Act (2023), our chapter
          serves as a platform for sensitizing students, staff, and the
          university community on the importance of protecting personal data and
          respecting privacy rights in the digital age.
        </p>
      </section>

      <section className="bg-linear-to-b from-gray-50 to-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#07522e]">
            Our Legal Foundation
          </h2>

          <p className="mb-4 leading-relaxed">
            The Nigeria Data Protection Act (NDP Act), signed into law on June
            12, 2023, establishes the NDPC as the regulatory body responsible
            for safeguarding personal data and privacy rights.
          </p>

          <p className="leading-relaxed">
            This framework aligns with global and national standards, including
            the 1999 Constitution of Nigeria (Section 37), the Universal
            Declaration of Human Rights, and international data protection
            principles.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#07522e]">
          Our Objectives
        </h2>

        <ul className="grid md:grid-cols-2 gap-5">
          {[
            "Safeguard the rights of individuals to data privacy",
            "Promote responsible data processing practices",
            "Educate students on digital privacy and data protection",
            "Support Nigeria’s digital economy through safe data usage",
          ].map((item, i) => (
            <li
              key={i}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-green-50 py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-[#07522e]">
              Our Vision
            </h3>
            <p>
              To be a leading student-driven body promoting data privacy
              awareness and compliance within LASU.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-[#07522e]">
              Our Mission
            </h3>
            <p>
              To educate, empower, and engage the university community in
              protecting personal data and upholding privacy rights.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-green-900 to-green-700 text-white py-14 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Together, We Protect Data</h2>

        <p className="mb-6 opacity-90">
          Join the NDPC LASU Chapter and be part of the movement for digital
          privacy awareness.
        </p>

        <button className="bg-white text-green-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 hover:scale-105 transition duration-300">
          Get Involved
        </button>
      </section>
    </main>
  );
}
