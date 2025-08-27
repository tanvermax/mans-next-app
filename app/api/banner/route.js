import dbConnect from "@/app/lib/mongodb";
import Banner from "@/app/models/Banner";
import { NextResponse } from "next/server";



// GET users
export async function GET() {
  try {
    await dbConnect();
    console.log("GET request received for banner");
    const users = await Banner.find({});
    return NextResponse.json(
      {
        success: true,
        data: users
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "Error fetching applications");
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
