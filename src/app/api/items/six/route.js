import { connect } from "@/lib/mongodb";

export async function GET() {
  try {
    const itemCollection = await connect("items");
    const result = await itemCollection.find().limit(6).toArray();

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
