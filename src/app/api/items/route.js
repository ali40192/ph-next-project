import { connect } from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

// GET: Fetch all items

export async function GET() {
  try {
    const itemCollection = await connect("items");
    const result = await itemCollection.find().toArray();

    // convert ObjectId to string for client use
    const serialized = result.map((doc) => ({
      ...doc,
      _id: doc._id ? doc._id.toString() : doc._id,
    }));

    return Response.json(serialized, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch items", error: error.message },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const itemCollection = await connect("items");
    const body = await request.json();

    const { name, category, price, stock, rating, status, img } = body;

    // Validation
    if (
      !name ||
      !category ||
      price === undefined ||
      stock === undefined ||
      rating === undefined ||
      !status ||
      !img
    ) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const newItem = {
      name,
      category,
      price: Number(price),
      stock: Number(stock),
      rating: Number(rating),
      status,
      img,
      createdAt: new Date(),
    };

    const result = await itemCollection.insertOne(newItem);

    // Revalidate items page
    revalidatePath("/items");

    return Response.json(
      {
        success: true,
        message: "Item added successfully",
        insertedId: result.insertedId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST ITEM ERROR:", error);

    return Response.json(
      { success: false, message: "Failed to add item" },
      { status: 500 },
    );
  }
}
