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

// POST: Create new item

export async function POST(request) {
  try {
    const itemCollection = await connect("items");
    const body = await request.json();
    const { message } = body;

    // Validation
    if (!message || typeof message !== "string") {
      return Response.json(
        { message: "please send a valid message" },
        { status: 400 },
      );
    }

    const newItem = {
      message,
      date: new Date(),
    };

    const result = await itemCollection.insertOne(newItem);

    // Revalidate items page
    revalidatePath("/items");

    return Response.json(
      {
        success: true,
        insertedId: result.insertedId
          ? result.insertedId.toString()
          : result.insertedId,
        item: {
          ...newItem,
          _id: result.insertedId ? result.insertedId.toString() : undefined,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 },
    );
  }
}
