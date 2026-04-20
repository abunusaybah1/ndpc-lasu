// import Hero from "./Hero";
import Link from "next/link";

const services = [
  {
    title: "DPCOs Registration",
    desc: "Register as a Data Controller or Processor and ensure compliance with NDPC standards.",
  },
  {
    title: "Privacy Breach Reporting",
    desc: "Report data breaches securely and follow proper response procedures.",
  },
  {
    title: "Licensed DPCOs",
    desc: "Access verified and licensed Data Protection Compliance Organizations.",
  },
  {
    title: "Audited Firms",
    desc: "Explore organizations that have successfully completed compliance audits.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      
      <section className="py-14 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#07522e]">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Practical tools and services to help you understand, implement, and
          comply with data protection standards.
        </p>
      </section>

      {/* Services */}
      <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative bg-white border border-gray-200 rounded-xl p-6 
            shadow-lg hover:shadow-[0_10px_30px_rgba(199,37,43,0.2)]
            transition duration-300 overflow-hidden"
          >
            <span
              className="absolute left-0 top-0 h-full w-1 bg-[#c7252b] 
            group-hover:w-2 transition-all duration-300"
            ></span>

            <h3
              className="text-xl font-semibold text-[#07522e] mb-2 
            group-hover:text-[#c7252b] transition"
            >
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed opacity-80">{service.desc}</p>

            <Link
              href="#"
              className="inline-block mt-4 text-sm font-medium text-[#c7252b] 
              opacity-0 group-hover:opacity-100 transition"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </section>

      {/* Highlight Section */}
      <section className="bg-[#07522e] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Built for Students & Organizations
        </h2>

        <p className="max-w-2xl mx-auto opacity-90">
          Whether you&nbsp;re a student, developer, or organization, our services
          guide you towards responsible and compliant data usage.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#c7252b] text-white py-14 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Compliance Journey
        </h2>

        <p className="mb-6 opacity-90">
          Take advantage of our services and become data-conscious today.
        </p>

        <Link
          href="#"
          className="bg-white text-[#c7252b] px-6 py-3 rounded-md font-medium 
          hover:scale-105 transition duration-300"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
