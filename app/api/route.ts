import connectDB from "@/lib/connectDb";

export async function GET() {
    connectDB();
  return Response.json({
    status: 200,
  });
}
