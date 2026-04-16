import Hero from "./Hero";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-4 leading-relaxed">
          The NDPC LASU Chapter is a student-driven extension of the Nigeria
          Data Protection Commission (NDPC), committed to promoting data privacy
          awareness, education, and compliance within Lagos State University.
        </p>

        <p className="leading-relaxed">
          In alignment with the Nigeria Data Protection Act (2023), our chapter
          serves as a platform for sensitizing students, staff, and the
          university community on the importance of protecting personal data and
          respecting privacy rights in the digital age.
        </p>
      </section>

      {/* Legal Background */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Legal Foundation</h2>
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

      {/* Objectives */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Our Objectives</h2>

        <ul className="space-y-4">
          <li className="bg-white shadow p-4 rounded-lg border">
            Safeguard the rights of individuals to data privacy
          </li>
          <li className="bg-white shadow p-4 rounded-lg border">
            Promote responsible data processing practices
          </li>
          <li className="bg-white shadow p-4 rounded-lg border">
            Educate students on digital privacy and data protection
          </li>
          <li className="bg-white shadow p-4 rounded-lg border">
            Support Nigeria’s digital economy through safe data usage
          </li>
        </ul>
      </section>

      {/* Vision & Mission */}
      <section className="bg-green-50 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              To be a leading student-driven body promoting data privacy
              awareness and compliance within LASU.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To educate, empower, and engage the university community in
              protecting personal data and upholding privacy rights.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Together, We Protect Data
        </h2>
        <p className="mb-6">
          Join the NDPC LASU Chapter and be part of the movement for digital
          privacy awareness.
        </p>

        <button className="bg-white text-green-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
          Get Involved
        </button>
      </section>
    </main>
  );
}
