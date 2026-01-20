import ItemDetailsCard from "@/components/ItemDetailsCard";
import React from "react";

async function getItem(id) {
  const res = await fetch(`http://localhost:3000/api/items/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch item");
  }

  return res.json();
}
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const details = await getItem(id);

  return <ItemDetailsCard details={details} />;
};

export default DetailsPage;
