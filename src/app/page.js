import About from "@/components/About";
import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import HowItWorks from "@/components/HowItWorks";
import ItemCard from "@/components/ItemCard";
import ItemsPreview from "@/components/ItemsPreview";
import Testimonials from "@/components/Testimonials";

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

  const reviews = [
    {
      name: "Alice Johnson",
      title: "Software Engineer",
      text: "This app is amazing! It helped me manage all my items effortlessly.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Bob Smith",
      title: "Product Manager",
      text: "Super clean UI and extremely fast. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Clara Lee",
      title: "Entrepreneur",
      text: "I love using this app for my inventory. Easy and intuitive!",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <section>
      <Banner />
      <main className="p-10 space-y-10 text-center">
        <section>
          <ItemsPreview items={items} />
        </section>
        <section>
          <About />
        </section>
        <section>
          <HowItWorks />
        </section>

        <section>
          <Testimonials reviews={reviews} />
        </section>
        <section>
          <CallToAction
            title="Boost Your Productivity Today"
            subtitle="Add and manage items seamlessly in one place."
            buttonText="Add Your First Item"
            buttonLink="/add-item"
          />
        </section>
      </main>
    </section>
  );
}
