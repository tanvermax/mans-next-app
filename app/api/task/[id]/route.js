import dbConnect from "@/app/lib/mongodb";
import Task from "@/app/models/Task";
import { NextResponse } from "next/server";

// PATCH update task status/details
export async function PATCH(req, { params }) {
  await dbConnect();
  try {
    const { id } = params;
    const body = await req.json();

    const allowedUpdates = ["status", "name", "details"];
    const updates = {};

    allowedUpdates.forEach((field) => {
      if (body[field]) updates[field] = body[field];
    });

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    );

    if (!updatedTask) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedTask },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
