import { connectMongoDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { NextResponse } from "next/server";
type RequestBody = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: Date;
};

type RequestUpdate = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: Date;
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const blogname = searchParams.get("blogname");

    await connectMongoDB();

    if (blogname) {
      const blog = await Blog.findOne({ slug: blogname }).lean();

      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json({ blog });
    } else {
      const blogs = await Blog.find().select({title : 1 , slug : 1 , coverImage : 1 , keywords : 1 , _id:1}).lean();

      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("GET blog error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
export async function POST(req: Request) {
  try {
    const {
      title,
      slug,
      content,
      coverImage,
      metaTitle,
      metaDescription,
      keywords,
      publishedAt,
    }: RequestBody = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize all user input
    const cleanTitle = DOMPurify.sanitize(title);
    const cleanSlug = DOMPurify.sanitize(slug);
    const cleanContent = DOMPurify.sanitize(content);
    const cleanCoverImage = DOMPurify.sanitize(coverImage);
    const cleanMetaTitle = DOMPurify.sanitize(metaTitle);
    const cleanMetaDescription = DOMPurify.sanitize(metaDescription);
    const cleanKeywords = keywords.map((kw) => DOMPurify.sanitize(kw));
    const cleanPublishedAt = publishedAt ? new Date(publishedAt) : null;

    await connectMongoDB();
    const newBlog = await Blog.create({
      title: cleanTitle,
      slug: cleanSlug,
      content: cleanContent,
      coverImage: cleanCoverImage,
      metaTitle: cleanMetaTitle,
      metaDescription: cleanMetaDescription,
      keywords: cleanKeywords,
      publishedAt: cleanPublishedAt,
    });

    return NextResponse.json(
      {
        message: "Blog created successfully",
        blog: newBlog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Blog Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function PUT(req: Request) {
  
  try {
    const {
      _id,
      title,
      slug,
      content,
      coverImage,
      metaTitle,
      metaDescription,
      keywords,
      publishedAt,
    }: RequestUpdate = await req.json();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!_id || !title || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const cleanTitle = DOMPurify.sanitize(title);
    const cleanSlug = DOMPurify.sanitize(slug);
    const cleanContent = DOMPurify.sanitize(content);
    const cleanCoverImage = DOMPurify.sanitize(coverImage);
    const cleanMetaTitle = DOMPurify.sanitize(metaTitle);
    const cleanMetaDescription = DOMPurify.sanitize(metaDescription);
    const cleanKeywords = keywords.map((kw) => DOMPurify.sanitize(kw));
    const cleanPublishedAt = publishedAt ? new Date(publishedAt) : null;

    await connectMongoDB();
    const result = await Blog.updateOne(
      { _id },
      {
        $set: {
          title: cleanTitle,
          slug: cleanSlug,
          content: cleanContent,
          coverImage: cleanCoverImage,
          metaTitle: cleanMetaTitle,
          metaDescription: cleanMetaDescription,
          keywords: cleanKeywords,
          publishedAt: cleanPublishedAt,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "No blog was updated. Verify _id." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Update successful" }, { status: 200 });
  } catch (error) {
    console.error("PUT Blog Error:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const _id = searchParams.get("_id");

    if (!_id) {
      return NextResponse.json(
        { error: "Please provide _id" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const result = await Blog.deleteOne({ _id });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No blog was deleted. Verify _id." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Delete successful" }, { status: 200 });
  } catch (error) {
    console.error("DELETE Blog Error:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the blog" },
      { status: 500 }
    );
  }
}
