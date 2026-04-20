import Link from "next/link";
import { BiEnvelope, BiMap, BiPhoneCall } from "react-icons/bi";

const services = [
  "DPCOs Registration",
  "Privacy Breach Reporting",
  "Licensed DPCOs",
  "Audited Firms",
];

export default function Footer() {
  return (
    <footer className="bg-[#07522e] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold tracking-wide mb-1">NDPC LASU</h2>
          <div className="h-0.75 w-10 bg-[#c7252b] rounded mb-4" />
          <p className="text-sm opacity-75 leading-relaxed">
            Promoting data privacy awareness and compliance within Lagos State
            University — in alignment with the Nigeria Data Protection Act
            (2023).
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-1 opacity-60">
            Navigate
          </h3>
          <div className="h-0.5 w-8 bg-[#c7252b] rounded mb-4 " />
          <div className="flex flex-col">
            <Link
              href="/"
              className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200"
            >
              Programs
            </Link>
            <Link
              href="/services"
              className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/faqs"
              className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200"
            >
              FAQs
            </Link>
            <Link
              href="/contact-us"
              className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-1 opacity-60">
            Services
          </h3>
          <div className="h-0.5 w-8 bg-[#c7252b] rounded mb-4" />
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li
                key={s}
                className="opacity-80 hover:opacity-100 hover:text-[#f9c2c4] transition-colors duration-200 cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-1 opacity-60">
            Contact
          </h3>
          <div className="h-0.5 w-8 bg-[#c7252b] rounded mb-4" />
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2 leading-snug items-center">
              <BiMap />
              Lagos State University, Ojo, Lagos
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope />
              info@ndpc-lasu.ng
            </li>
            <li className="flex items-center gap-2">
              <BiPhoneCall />
              +234 XXX XXX XXXX
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] opacity-50">
          <p>
            © {new Date().getFullYear()} NDPC LASU Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
