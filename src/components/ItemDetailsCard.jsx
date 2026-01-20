import Image from "next/image";

export default function ItemDetailsCard({ details }) {
  if (!details) return null;

  const { name, category, price, stock, rating, status, img, description } = details;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-auto bg-gray-100">
          {img ? (
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-80 w-full bg-gray-300 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="p-8 lg:p-12 flex flex-col justify-between space-y-6 lg:w-1/2">
          {/* Title & Badges */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{name}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  status === "active"
                    ? "bg-green-600/80 text-white"
                    : "bg-red-600/80 text-white"
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          {/* Rating, Stock, Price */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-gray-700">
            <p>⭐ Rating: <span className="font-semibold">{rating}</span></p>
            <p>Stock: <span className="font-semibold">{stock}</span></p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">${price}</p>
          </div>

          {/* Description */}
          {description && (
            <div className="text-gray-600 space-y-2 leading-relaxed">
              {description.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
