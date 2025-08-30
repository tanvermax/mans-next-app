"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

const usersList = ["Tanveer", "Mahidi", "Alex", "Admin"];
const SUPER_ADMIN = "Admin";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    axios.get("/api/task")
      .then(res => {
        console.log(res.data.data)
        setTasks(res.data.data)
      })
  }, []);

  const handleEditTask = (taskId, updatedData) => {
  setTasks(tasks.map(task => 
    task.id === taskId 
      ? { ...task, ...updatedData } 
      : task
  ));
  // In a real app, you would also make an API call here
};

  // Add task
  const handleAddTask = async () => {
    if (!userName || !taskName || !taskDetails || !dueDate) {
      alert("Please fill all required fields!");
      return;
    }

    setIsLoading(true);

    const newTask = {
      id: Date.now(),
      name: userName,
      task: taskName,
      details: taskDetails,
      status: "Not Complete",
      dueDate: dueDate,
      dueTime: dueTime || "23:59",
      createdAt: new Date().toISOString(),
      priority: "medium"
    };

    try {
      // In a real app, you would use the API response
      console.log("tyask", newTask)
      await axios.post("/api/task", newTask)
        .then(res => console.log(res.data.data))
      // Simulate API call delay
      // await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Update task status
  const handleUpdateStatus = (id, status) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status } : task
    ));
  };

  // Delete task
  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  // Tasks to show (SuperAdmin sees all, user sees their own)
  const visibleTasks = userName === SUPER_ADMIN
    ? tasks
    : tasks.filter(task => task.name === userName);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
          <h1 className="text-3xl font-bold mb-2">Task Manager</h1>
          <p className="opacity-90">Stay organized and productive</p>
        </div>

        <div className="p-6 space-y-6">
          {/* User Selection */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <label className="block font-semibold text-blue-800 mb-2">Select User:</label>
            <select
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">-- Select User --</option>
              {usersList.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>

          {/* Add Task Form */}
          {userName && (
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Task
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Task Name *</label>
                  <input
                    type="text"
                    placeholder="Enter task name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date *</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Time (optional)</label>
                <input
                  type="time"
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Details *</label>
                <textarea
                  placeholder="Describe your task..."
                  value={taskDetails}
                  onChange={(e) => setTaskDetails(e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleAddTask}
                disabled={isLoading}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Task...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Add Task
                  </>
                )}
              </button>
            </div>
          )}

          {/* Task Filters */}
          {userName && visibleTasks.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">Filter Tasks:</h3>
              <div className="flex flex-wrap gap-2">
                {["all", "Not Complete", "Still Working", "Complete"].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === status
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {status === "all" ? "All Tasks" : status}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tasks List */}
          <TaskList
             tasks={tasks}
            userName={userName}
            SUPER_ADMIN={SUPER_ADMIN}
            onUpdateStatus={handleUpdateStatus}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask} // You'll need to implement this function
          />
          {/*  */}
        </div>
      </div>
    </div>
  );
}