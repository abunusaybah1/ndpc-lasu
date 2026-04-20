import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07522e] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">NDPC LASU</h2>
          <p className="text-sm opacity-80 leading-relaxed">
            Promoting data privacy awareness and compliance within Lagos State
            University.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 relative inline-block">
            Quick Links
            <span className="block h-[2px] w-10 bg-[#c7252b] mt-1"></span>
          </h3>

          <ul className="space-y-2 text-sm">
            {["Home", "About", "Programs", "Services", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="hover:text-[#c7252b] transition"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 relative inline-block">
            Services
            <span className="block h-[2px] w-10 bg-[#c7252b] mt-1"></span>
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#c7252b] transition cursor-pointer">
              DPCOs Registration
            </li>
            <li className="hover:text-[#c7252b] transition cursor-pointer">
              Privacy Breach Reporting
            </li>
            <li className="hover:text-[#c7252b] transition cursor-pointer">
              Licensed DPCOs
            </li>
            <li className="hover:text-[#c7252b] transition cursor-pointer">
              Audited Firms
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 relative inline-block">
            Contact Us
            <span className="block h-[2px] w-10 bg-[#c7252b] mt-1"></span>
          </h3>

          <ul className="space-y-2 text-sm opacity-80">
            <li>Lagos State University, Ojo</li>
            <li>Email: info@ndpc-lasu.ng</li>
            <li>Phone: +234 XXX XXX XXXX</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm opacity-70">
        © {new Date().getFullYear()} NDPC LASU Chapter. All rights reserved.
      </div>
    </footer>
  );
}
