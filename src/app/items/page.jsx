import ItemCard from "@/components/ItemCard";
import React from "react";

async function getItems() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store", // always fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

const Items = async () => {
  const items = await getItems();
  return (
    <section className="w-3/4 mx-auto my-10">
      <h1 className="font-bold text-center text-2xl my-8">All Items here</h1>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Items;
