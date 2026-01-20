import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
  const { _id, name, category, price, stock, rating, status, img } = item;

  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full bg-gray-100">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
            {category}
          </span>
        </div>

        <p className="text-sm text-gray-500">Rating: ⭐ {rating}</p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${price}</p>

          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="text-sm text-gray-500">Stock: {stock}</p>
      </div>

      {/* Button */}
      <div className="p-4 pt-0">
        <Link
          href={`/items/${_id}`}
          className="block w-full text-center rounded-md bg-gray-900 text-white py-2 text-sm font-medium hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
