import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-8 py-20 flex flex-col md:flex-row items-center gap-12 bg-[url('/images/hero-bg.png')] bg-cover bg-center">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-secondary">
          NDPC LASU Chapter
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          Promoting data protection awareness, compliance, and digital
          responsibility among students of Lagos State University.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-md text-sm hover:opacity-90 transition">
            Join the Chapter
          </button>

          <Link
            href="/about-us"
            className="border border-gray-300 px-6 py-3 rounded-md text-sm hover:border-primary hover:text-primary transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
