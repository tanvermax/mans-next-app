import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // user name (from list)
    task: { type: String, required: true },  // task name
    details: { type: String, required: true },
    status: {
      type: String,
      enum: ["Not Complete", "Still Working", "Complete"],
      default: "Not Complete",
    },
    dueDate: { type: String, required: true },
    dueTime: { type: String, required: true, default: "23:59" },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },
  },
  { timestamps: true } // This automatically adds createdAt and updatedAt
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);