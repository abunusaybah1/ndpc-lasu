// "use client";

// import Link from "next/dist/client/link";
// import Image from "next/image";
// import { useState } from "react";
// import { BiMenu, BiX } from "react-icons/bi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-8 py-5 border-b border-b-gray-400 relative z-10">
//       <Image
//         src="/images/logo-trans.png"
//         alt="NDPC LASU"
//         width={200}
//         height={100}
//       />
//       <div className="hidden md:flex gap-8 text-sm">
//         <Link
//           href="about-us"
//           className="text-[#07522e] hover:font-bold transition"
//         >
//           About
//         </Link>
//         <Link
//           href="programs"
//           className="text-[#07522e] hover:font-bold transition"
//         >
//           Programs
//         </Link>
//         <Link
//           href="services"
//           className="text-[#07522e] hover:font-bold transition"
//         >
//           Services
//         </Link>
//         <Link href="faqs" className="text-[#07522e] hover:font-bold transition">
//           FAQs
//         </Link>
//       </div>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden focus:outline-none lg:hidden"
//       >
//         {isOpen ? (
//           <BiX className="text-4xl text-[#c7252b] hover:rotate-10 cursor-pointer" />
//         ) : (
//           <BiMenu className="text-4xl text-[#c7252b] hover:rotate-10 cursor-pointer" />
//         )}
//       </button>
//       {!isOpen && (
//         <Link
//           href="contact-us"
//           className="hidden md:block lg:block bg-[#c7252b] font-bold text-white px-4 py-2 text-sm rounded-md hover:text-[#c7252b] hover:bg-white hover:border-2 hover:border-[#c7252b] hover:cursor-pointer transition"
//         >
//           Get in touch
//         </Link>
//       )}

//       {isOpen && (
//         <div className="animation-fadeIn absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
//           <Link
//             href="about-us"
//             className="text-[#07522e] hover:font-bold transition"
//           >
//             About
//           </Link>
//           <Link
//             href="programs"
//             className="text-[#07522e] hover:font-bold transition"
//           >
//             Programs
//           </Link>
//           <Link
//             href="services"
//             className="text-[#07522e] hover:font-bold transition"
//           >
//             Services
//           </Link>
//           <Link
//             href="faqs"
//             className="text-[#07522e] hover:font-bold transition"
//           >
//             FAQs
//           </Link>
//           <Link
//             href="contact-us"
//             className="w-[80%] text-center bg-[#c7252b] font-bold text-white px-4 py-2 text-sm rounded-md hover:text-[#c7252b] hover:bg-white hover:border-2 hover:border-[#c7252b] hover:cursor-pointer transition"
//           >
//             Get in touch
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Programs", href: "/programs" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-gray-200 z-50">
      <div className="absolute bottom-0 left-0 w-full h-0.75 bg-linear-to-r from-[#07522e] via-[#07522e] to-[#c7252b]" />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-trans.png"
            alt="NDPC LASU Chapter"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-gray-700 tracking-wide pb-0.5 border-b-2 border-transparent hover:text-[#07522e] hover:border-[#07522e] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact-us"
          className="hidden md:inline-flex items-center bg-[#c7252b] text-white text-[13px] font-bold px-5 py-2.5 rounded-md border-2 border-[#c7252b] hover:bg-transparent hover:text-[#c7252b] transition-all duration-200 tracking-wide"
        >
          Get in Touch
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#c7252b] focus:outline-none cursor-pointer hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <BiX className="text-4xl" />
          ) : (
            <BiMenu className="text-4xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-white
          shadow-lg border-t border-gray-100 flex flex-col items-center
          gap-1 py-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-[14px] font-medium
                text-gray-700 hover:text-[#07522e] hover:bg-gray-50 transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 w-[80%]">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#c7252b] text-white
                font-bold text-sm px-4 py-3 rounded-md border-2 border-[#c7252b]
                hover:bg-transparent hover:text-[#c7252b] transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
