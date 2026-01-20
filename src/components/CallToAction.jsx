import Link from "next/link";

export default function CallToAction({
  title = "Ready to get started?",
  subtitle = "Join now and manage your items effortlessly with our app.",
  buttonText = "Get Started",
  buttonLink = "/add-item",
}) {
  return (
    <section className="bg-gray-400 py-20 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 mb-8">{subtitle}</p>

        {/* CTA Button */}
        <Link
          href={buttonLink}
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
