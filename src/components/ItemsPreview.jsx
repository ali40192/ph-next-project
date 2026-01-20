import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ItemsPreview({ items = [] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Items Preview</h2>
          </div>

          <Link
            href="/items"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Items Grid */}
        {items.length === 0 ? (
          <p className="text-gray-500">No items available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.slice(0, 4).map((item) => (
              <div
                key={item._id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.category}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      ${item.price}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-yellow-500">
                      <Star size={14} />
                      {item.rating}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-xs px-2 py-1 rounded-full
                      ${
                        item.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
