// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#07522e] text-white">
//       <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold mb-3">NDPC LASU</h2>
//           <p className="text-sm opacity-80 leading-relaxed">
//             Promoting data privacy awareness and compliance within Lagos State
//             University.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 relative inline-block">
//             Quick Links
//             <span className="block h-[2px] w-10 bg-[#c7252b] mt-1"></span>
//           </h3>

//           <ul className="space-y-2 text-sm">
//             {["Home", "About", "Programs", "Services", "Contact"].map(
//               (item, i) => (
//                 <li key={i}>
//                   <Link
//                     href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                     className="hover:text-[#c7252b] transition"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ),
//             )}
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 relative inline-block">
//             Services
//             <span className="block h-[2px] w-10 bg-[#c7252b] mt-1"></span>
//           </h3>

//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-[#c7252b] transition cursor-pointer">
//               DPCOs Registration
//             </li>
//             <li className="hover:text-[#c7252b] transition cursor-pointer">
//               Privacy Breach Reporting
//             </li>
//             <li className="hover:text-[#c7252b] transition cursor-pointer">
//               Licensed DPCOs
//             </li>
//             <li className="hover:text-[#c7252b] transition cursor-pointer">
//               Audited Firms
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 relative inline-block">
//             Contact Us
//             <span className="block h-[2px] w-10 bg-[#c7252b] mt-1"></span>
//           </h3>

//           <ul className="space-y-2 text-sm opacity-80">
//             <li>Lagos State University, Ojo</li>
//             <li>Email: info@ndpc-lasu.ng</li>
//             <li>Phone: +234 XXX XXX XXXX</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/20 text-center py-4 text-sm opacity-70">
//         © {new Date().getFullYear()} NDPC LASU Chapter. All rights reserved.
//       </div>
//     </footer>
//   );
// }

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
