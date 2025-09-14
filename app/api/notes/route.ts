import connectDB from "@/lib/connectDb";
import NoteModel from "@/models/noteModel";

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    await connectDB();
    const note = await NoteModel.create({
      title,
      content,
    });
    return Response.json(
      {
        success: true,
        message: "Note created Successfully",
        data: note,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Internal Error",
      },
      {
        status: 500,
      }
    );
  }
}
