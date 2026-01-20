import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials({ reviews = [] }) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from our users about their experience using our app.
        </p>

        {/* Testimonials Grid */}
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <Quote className="text-blue-500 mb-3" />

                <p className="text-gray-700 text-sm mb-4 text-center">
                  "{review.text}"
                </p>

                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <span className="text-gray-500 text-xs">{review.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
