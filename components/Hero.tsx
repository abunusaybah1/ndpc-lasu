import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center gap-12 ">
      <div className="hero landing-hero flex flex-col items-start justify-between lg:items-center lg:justify-center w-full h-full px-15 py-20 lg:p-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
          NDPC LASU Chapter
        </h1>

        <p className="mt-6 text-[#] max-w-md text-lg font-bold">
          Promoting data protection awareness, compliance, and digital
          responsibility among students of Lagos State University.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#07522e] font-bold text-white px-6 py-3 rounded-md text-sm hover:bg-white hover:text-[#07522e] cursor-pointer transition">
            Join the Chapter
          </button>

          <Link
            href="/about-us"
            className="border border-[#07522e] font-bold px-6 py-3 rounded-md text-sm hover:border-none hover:bg-white hover:text-[#07522e] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
