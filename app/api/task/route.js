import dbConnect from "@/app/lib/mongodb";
import Task from "@/app/models/Task";
import { NextResponse } from "next/server";

// GET all tasks or filter by owner
export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get("owner");

    let tasks;
    if (owner) {
      tasks = await Task.find({ owner });
    } else {
      tasks = await Task.find({});
    }

    return NextResponse.json({ success: true, data: tasks }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
    
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}


// POST create task
export async function POST(req) {
  await dbConnect();
  
  try {
    const { name, task, details, dueDate, dueTime, priority, status } = await req.json();

    if (!name || !task || !details || !dueDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, task, details, dueDate" },
        { status: 400 }
      );
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dueDate)) {
      return NextResponse.json(
        { success: false, error: "dueDate must be in YYYY-MM-DD format" },
        { status: 400 }
      );
    }

    if (dueTime && !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(dueTime)) {
      return NextResponse.json(
        { success: false, error: "dueTime must be in HH:MM format" },
        { status: 400 }
      );
    }

    const validPriorities = ["low", "medium", "high"];
    if (priority && !validPriorities.includes(priority)) {
      return NextResponse.json(
        { success: false, error: "priority must be one of: low, medium, high" },
        { status: 400 }
      );
    }

    // ✅ include status if provided
    const newTask = new Task({ 
      name, 
      task, 
      details, 
      dueDate, 
      dueTime: dueTime || "23:59",
      priority: priority || "medium",
      status: status || "Not Complete" // use frontend or fallback
    });
    
    await newTask.save();

    return NextResponse.json(
      { success: true, data: newTask, message: "Task created successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saving task:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

