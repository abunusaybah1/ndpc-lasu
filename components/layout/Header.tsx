import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
      <Image
        src="/images/logo-trans.png"
        alt="NDPC LASU"
        width={200}
        height={100}
      />

      <div className="hidden md:flex gap-8 text-sm">
        <a href="#" className="hover:text-primary transition">
          About
        </a>
        <a href="#" className="hover:text-primary transition">
          Programs
        </a>
        <a href="#" className="hover:text-primary transition">
          Team
        </a>
        <a href="#" className="hover:text-primary transition">
          FAQs
        </a>
      </div>

      <button className="bg-[#07522e] font-bold text-white px-4 py-2 text-sm rounded-md hover:opacity-90 hover:cursor-pointer transition">
        Get in touch
      </button>
    </nav>
  );
};

export default Navbar;
