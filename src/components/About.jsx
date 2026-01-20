import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/about/about.jpg"
            alt="About us"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Our Platform
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We provide a modern and reliable platform to manage your items
            efficiently. Our goal is to make item tracking simple, fast, and
            accessible for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Built with the latest technologies like Next.js and MongoDB, our
            system ensures high performance, security, and scalability.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Learn More
            </button>

            <button className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
