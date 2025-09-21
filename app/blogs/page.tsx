import connectDB from "@/lib/connectDb"
import NoteModel from "@/models/noteModel";

export default async function () {
    await connectDB();
    const blogs = await NoteModel.find({});
    return (
        <div>
            All the blogs
            {
                blogs.map((blog) => (
                    <BlogCard key={blog.title} blog={blog} />
                ))
            }
        </div>
    )
}

function BlogCard({ blog }: { blog: any }) {
    return (
        <div className="">
            {blog.title}
            {
                blog.content
            }
        </div>
    )
}