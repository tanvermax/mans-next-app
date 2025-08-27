// app/api/newspost/[slug]/route.js
import dbConnect from "@/app/lib/mongodb";
import News from "@/app/models/News";
import { NextResponse } from "next/server";

// GET /api/newspost/[slug]
export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { slug } = params;
    console.log("Requested slug:", slug);

    const news = await News.findOne({ slug });

    if (!news) {
      return NextResponse.json(
        { success: false, message: "News not found" },
        { status: 404 }
      );
    }

    // Convert MongoDB document to plain object
    const newsObject = {
      _id: news._id.toString(),
      headline: news.headline,
      description: news.description,
      content: news.content,
      photoUrl: news.photoUrl,
      slug: news.slug,
      createdAt: news.createdAt.toISOString(),
      updatedAt: news.updatedAt.toISOString(),
    };

    return NextResponse.json(
      { success: true, data: newsObject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}