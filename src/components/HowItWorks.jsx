import { Search, PlusCircle, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Browse Items",
      description:
        "Explore available items easily with a clean and fast interface.",
    },
    {
      icon: <PlusCircle size={28} />,
      title: "Add New Item",
      description:
        "Add products with details like price, stock, rating, and image.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Manage & Track",
      description:
        "Update, manage, and track items securely from your dashboard.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Follow these simple steps to manage your items efficiently
          using our Next.js application.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white mx-auto mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
