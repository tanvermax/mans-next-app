import dbConnect from "@/app/lib/mongodb";
import News from "@/app/models/News";
import { NextResponse } from "next/server";



// GET users
export async function GET() {
  try {
    await dbConnect();
    console.log("GET request received for news");
    const newsList = await News.find();
    return NextResponse.json(
      {
        success: true,
        data: newsList
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "Error fetching news post");
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
