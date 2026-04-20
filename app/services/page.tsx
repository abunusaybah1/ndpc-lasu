import Link from "next/link";
import { BiBuildingHouse } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdAppRegistration, MdVerified } from "react-icons/md";

const services = [
  {
    title: "DPCOs Registration",
    desc: "Register as a Data Controller or Processor and ensure compliance with NDPC standards.",
    icon: <MdAppRegistration className="fill-[#c7252b]" />,
  },
  {
    title: "Privacy Breach Reporting",
    desc: "Report data breaches securely and follow proper response procedures.",
    icon: <IoNotifications className="fill-[#c7252b]" />,
  },
  {
    title: "Licensed DPCOs",
    desc: "Access verified and licensed Data Protection Compliance Organizations.",
    icon: <MdVerified className="fill-[#c7252b]" />,
  },
  {
    title: "Audited Firms",
    desc: "Explore organizations that have successfully completed compliance audits.",
    icon: <BiBuildingHouse className="fill-[#c7252b]" />,
  },
];

const ServicesPPage = () => {
  return (
    <main className="bg-white text-gray-800">
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#07522e]">
          Our Services
        </h2>
        <div className="h-1 w-12 bg-[#c7252b] mx-auto mt-3 rounded mb-5" />
        <p className="max-w-2xl mx-auto text-gray-500 text-sm leading-relaxed">
          Practical tools and services to help you understand, implement, and
          comply with data protection standards.
        </p>
      </section>

      <section className="pb-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-7">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative bg-white border border-gray-100 rounded-xl p-7
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
              hover:shadow-[0_10px_30px_rgba(199,37,43,0.12)]
              transition-all duration-300 overflow-hidden"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-[#c7252b] group-hover:w-1.5 transition-all duration-300 rounded-l-xl" />

            <span className="text-3xl mb-4 block">{service.icon}</span>
            <h3 className="text-[#07522e] font-bold text-lg mb-2 group-hover:text-[#c7252b] transition-colors duration-200">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {service.desc}
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-[#c7252b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-[#07522e] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Built for Students & Organizations
        </h2>
        <div className="h-1 w-12 bg-[#c7252b] mx-auto rounded mb-6" />
        <p className="max-w-2xl mx-auto opacity-80 text-sm leading-relaxed">
          Whether you&apos;re a student, developer, or organization — our
          services guide you towards responsible and compliant data usage.
        </p>
      </section>

      <section className="bg-[#c7252b] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Start Your Compliance Journey
        </h2>
        <p className="mb-8 opacity-90 max-w-md mx-auto text-sm">
          Take advantage of our services and become data-conscious today.
        </p>
        <Link
          href="contact-us"
          className="inline-block bg-white text-[#c7252b] font-bold px-7 py-3.5 rounded-md text-sm hover:scale-105 transition-all duration-200"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}

export default ServicesPPage;