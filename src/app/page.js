import About from "@/components/About";
import Banner from "@/components/Banner";
import ItemCard from "@/components/ItemCard";

async function getSixItems() {
  const res = await fetch(`http://localhost:3000/api/items/six`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}
export default async function Home() {
  const items = await getSixItems();
  return (
    <section>
      <Banner />
      <main className="p-10 space-y-10 text-center">
        <section className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Header */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Latest Items</h2>
              <p className="text-gray-500 mt-2">
                Explore our recently added items
              </p>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {items?.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <About />
        </section>
        <section>How It Works</section>
        <section>Items Preview</section>
        <section>Testimonials</section>
        <section>Call To Action</section>
      </main>
    </section>
  );
}
