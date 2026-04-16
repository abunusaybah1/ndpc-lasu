"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-b-gray-400 relative z-10">
      <Image
        src="/images/logo-trans.png"
        alt="NDPC LASU"
        width={200}
        height={100}
      />
      <div className="hidden md:flex gap-8 text-sm">
        <Link href="#" className="text-[#07522e] hover:font-bold transition">
          About
        </Link>
        <Link href="#" className="text-[#07522e] hover:font-bold transition">
          Programs
        </Link>
        <Link href="#" className="text-[#07522e] hover:font-bold transition">
          Team
        </Link>
        <Link href="#" className="text-[#07522e] hover:font-bold transition">
          FAQs
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none lg:hidden"
      >
        {isOpen ? (
          <BiX className="text-4xl text-[#07522e] hover:rotate-10 cursor-pointer" />
        ) : (
          <BiMenu className="text-4xl text-[#07522e] hover:rotate-10 cursor-pointer" />
        )}
      </button>
      {!isOpen && (
        <Link
          href="contact-us"
          className="hidden md:block lg:block bg-[#07522e] font-bold text-white px-4 py-2 text-sm rounded-md hover:text-[#07522e] hover:bg-white hover:border-2 hover:border-[#07522e] hover:cursor-pointer transition"
        >
          Get in touch
        </Link>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <Link href="#" className="text-[#07522e] hover:font-bold transition">
            About
          </Link>
          <Link href="#" className="text-[#07522e] hover:font-bold transition">
            Programs
          </Link>
          <Link href="#" className="text-[#07522e] hover:font-bold transition">
            Team
          </Link>
          <Link href="#" className="text-[#07522e] hover:font-bold transition">
            FAQs
          </Link>
          <Link
            href="contact-us"
            className="w-[80%] text-center bg-[#07522e] font-bold text-white px-4 py-2 text-sm rounded-md hover:text-[#07522e] hover:bg-white hover:border-2 hover:border-[#07522e] hover:cursor-pointer transition"
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
