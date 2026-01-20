import { connect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
const itemCollection = connect("items");
export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }

  const query = { _id: new ObjectId(id) };

  const result = await itemCollection.findOne(query);

  return Response.json(result);
}

//////delete item by id
// export async function DELETE(request, { params }) {
//   const { id } = await params;

//   if (id.length != 24) {
//     return Response.json({
//       status: 400,
//       message: "send correct _id",
//     });
//   }

//   const query = { _id: new ObjectId(id) };

//   const result = await itemCollection.deleteOne(query);

//   return Response.json(result);
// }

//////update item by id
