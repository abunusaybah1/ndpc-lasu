// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <main className="bg-white text-gray-800">
//       <section className="w-full flex flex-col items-center gap-12 ">
//         <div className="hero about-hero flex flex-col items-start justify-between lg:items-center lg:justify-center w-full h-full px-15 py-20 lg:p-25">
//           <h1 className="text-white text-3xl md:text-5xl lg:text-center font-bold mb-4">
//             NDPC LASU Chapter
//           </h1>
//           <p className="mt-4 text-white max-w-md text-lg lg:text-center font-bold">
//             Championing Data Privacy Awareness and Protection within Lagos State
//             University
//           </p>
//         </div>
//       </section>
//       <section className="py-14 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-[#07522e] relative inline-block">
//           Who We Are
//           <span className="block h-1 w-12 bg-[#c7252b] mt-2 rounded"></span>
//         </h2>

//         <p className="mb-4 leading-relaxed hover:text-gray-900 transition duration-300">
//           The NDPC LASU Chapter is a student-driven extension of the Nigeria
//           Data Protection Commission (NDPC), committed to promoting data privacy
//           awareness, education, and compliance within Lagos State University.
//         </p>

//         <p className="leading-relaxed hover:text-gray-900 transition duration-300">
//           In alignment with the Nigeria Data Protection Act (2023), our chapter
//           serves as a platform for sensitizing students, staff, and the
//           university community on the importance of protecting personal data and
//           respecting privacy rights in the digital age.
//         </p>
//       </section>
//       <section className="bg-[#c7252b] px-6 py-15 text-[white]">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 ">Our Legal Foundation</h2>

//           <p className="mb-4 leading-relaxed">
//             The Nigeria Data Protection Act (NDP Act), signed into law on June
//             12, 2023, establishes the NDPC as the regulatory body responsible
//             for safeguarding personal data and privacy rights.
//           </p>

//           <p className="leading-relaxed">
//             This framework aligns with global and national standards, including
//             the 1999 Constitution of Nigeria (Section 37), the Universal
//             Declaration of Human Rights, and international data protection
//             principles.
//           </p>
//         </div>
//       </section>
//       <section className="w-full py-14 px-6 max-w-5xl mx-auto  text-[#07522e]">
//         <h2 className="text-3xl font-bold px-6">
//           Our Objectives
//           <span className="block h-1 w-12 bg-[#c7252b] mt-2 rounded"></span>
//         </h2>

//         <ul className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 rounded-lg w-full">
//           {[
//             "Safeguard the rights of individuals to data privacy",
//             "Promote responsible data processing practices",
//             "Educate students on digital privacy and data protection",
//             "Support Nigeria’s digital economy through safe data usage",
//           ].map((item, i) => (
//             <li
//               key={i}
//               className="bg-white border-[#c7252b] border rounded-xl p-5  shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer hover:shadow-[0_10px_30px_rgba(7,20,46,0.5)]"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section className="bg-[#07522e] py-14 px-6 lg:py-20">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
//             <h3 className="text-xl font-semibold mb-2 text-[#07522e]">
//               Our Vision
//             </h3>
//             <p>
//               To be a leading student-driven body promoting data privacy
//               awareness and compliance within LASU.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
//             <h3 className="text-xl font-semibold mb-2 text-[#07522e]">
//               Our Mission
//             </h3>
//             <p>
//               To educate, empower, and engage the university community in
//               protecting personal data and upholding privacy rights.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="bg-[#c7252b] text-white py-14 px-6 text-center lg:py-20">
//         <h2 className="text-3xl font-bold mb-4">Together, We Protect Data</h2>

//         <p className="mb-6 opacity-90">
//           Join the NDPC LASU Chapter and be part of the movement for digital
//           privacy awareness.
//         </p>

//         <Link
//           href=""
//           className="bg-white text-[#c7252b] px-6 py-3 rounded-md font-medium hover:scale-105 transition duration-300"
//         >
//           Get Involved
//         </Link>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";

const objectives = [
  "Safeguard the rights of individuals to data privacy",
  "Promote responsible data processing practices",
  "Educate students on digital privacy and data protection",
  "Support Nigeria's digital economy through safe data usage",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="hero about-hero relative w-full min-h-[50vh] flex flex-col items-start justify-center px-8 md:px-16 lg:items-center lg:text-center py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c7252b] bg-white px-3 py-1.5 rounded-full mb-6">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            NDPC LASU Chapter
          </h1>
          <p className="text-white text-lg max-w-md leading-relaxed">
            Championing Data Privacy Awareness and Protection within Lagos State
            University
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#07522e] mb-2">Who We Are</h2>
        <div className="h-1 w-12 bg-[#c7252b] rounded mb-8" />
        <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
          <p>
            The NDPC LASU Chapter is a student-driven extension of the Nigeria
            Data Protection Commission (NDPC), committed to promoting data
            privacy awareness, education, and compliance within Lagos State
            University.
          </p>
          <p>
            In alignment with the Nigeria Data Protection Act (2023), our
            chapter serves as a platform for sensitizing students, staff, and
            the university community on the importance of protecting personal
            data and respecting privacy rights in the digital age.
          </p>
        </div>
      </section>

      <section className="bg-[#c7252b] px-6 py-16 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Our Legal Foundation</h2>
          <div className="h-1 w-12 bg-white/40 rounded mb-8" />
          <div className="grid md:grid-cols-2 gap-8 leading-relaxed opacity-90">
            <p>
              The Nigeria Data Protection Act (NDP Act), signed into law on June
              12, 2023, establishes the NDPC as the regulatory body responsible
              for safeguarding personal data and privacy rights.
            </p>
            <p>
              This framework aligns with global and national standards,
              including the 1999 Constitution of Nigeria (Section 37), the
              Universal Declaration of Human Rights, and international data
              protection principles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#07522e] mb-2">
          Our Objectives
        </h2>
        <div className="h-1 w-12 bg-[#c7252b] rounded mb-10" />
        <ul className="grid sm:grid-cols-2 gap-5">
          {objectives.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-6
                shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(7,82,46,0.12)]
                hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="shrink-0 w-8 h-8 bg-[#07522e] text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed pt-1">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#07522e] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Our Vision",
              text: "To be a leading student-driven body promoting data privacy awareness and compliance within LASU.",
            },
            {
              label: "Our Mission",
              text: "To educate, empower, and engage the university community in protecting personal data and upholding privacy rights.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-1 bg-[#c7252b] rounded mb-4" />
              <h3 className="text-lg font-bold text-[#07522e] mb-3">
                {item.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#c7252b] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Together, We Protect Data</h2>
        <p className="mb-8  max-w-md mx-auto text-sm">
          Join the NDPC LASU Chapter and be part of the movement for digital
          privacy awareness.
        </p>
        <Link
          href="/join-us"
          className="inline-block bg-white text-[#c7252b] px-7 py-3.5 rounded-md font-bold text-sm hover:scale-105 transition-all duration-200"
        >
          Get Involved
        </Link>
      </section>
    </main>
  );
}
