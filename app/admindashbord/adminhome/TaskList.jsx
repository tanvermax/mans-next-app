"use client";

import { useState } from "react";

const TaskList = ({ 
  tasks, 
  userName, 
  SUPER_ADMIN, 
  onUpdateStatus, 
  onDeleteTask, 
  onEditTask 
}) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editForm, setEditForm] = useState({
    task: "",
    details: "",
    dueDate: "",
    dueTime: ""
  });

  // Check if task is overdue
  const isOverdue = (task) => {
    if (task.status === "Complete") return false;
    
    const now = new Date();
    const dueDateTime = new Date(`${task.dueDate}T${task.dueTime}`);
    return dueDateTime < now;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return "";
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    return hour > 12 
      ? `${hour - 12}:${minutes} PM` 
      : `${hour}:${minutes} AM`;
  };

  // Start editing a task
  const handleEditStart = (task) => {
    setEditingTaskId(task.id);
    setEditForm({
      task: task.task,
      details: task.details,
      dueDate: task.dueDate,
      dueTime: task.dueTime || ""
    });
  };

  // Cancel editing
  const handleEditCancel = () => {
    setEditingTaskId(null);
    setEditForm({
      task: "",
      details: "",
      dueDate: "",
      dueTime: ""
    });
  };

  // Save edited task
  const handleEditSave = (taskId) => {
    onEditTask(taskId, editForm);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        {userName === SUPER_ADMIN ? "All Tasks" : "My Tasks"}
        {tasks.length > 0 && ` (${tasks.length})`}
      </h2>

      {tasks.length === 0 ? (
        <div className="text-center py-10 bg-blue-50 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-600">No tasks found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map(task => {
            const overdue = isOverdue(task);
            const canEdit = userName === task.name || userName === SUPER_ADMIN;
            
            return (
              <div key={task._id} className={`border rounded-xl p-5 transition-all duration-200 hover:shadow-md ${
                task.status === "Complete" 
                  ? "bg-green-50 border-green-200" 
                  : overdue 
                    ? "bg-red-50 border-red-200" 
                    : "bg-white border-gray-200"
              }`}>
                {editingTaskId === task._id ? (
                  // Edit Mode
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                      <input
                        type="text"
                        value={editForm.task}
                        onChange={(e) => setEditForm({...editForm, task: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
                      <textarea
                        value={editForm.details}
                        onChange={(e) => setEditForm({...editForm, details: e.target.value})}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                        <input
                          type="date"
                          value={editForm.dueDate}
                          onChange={(e) => setEditForm({...editForm, dueDate: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Due Time (optional)</label>
                        <input
                          type="time"
                          value={editForm.dueTime}
                          onChange={(e) => setEditForm({...editForm, dueTime: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <button
                        onClick={() => handleEditSave(task.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleEditCancel}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-800">{task.task}</h3>
                        <p className="text-gray-600 mt-1">{task.details}</p>

                        <div className="flex flex-wrap gap-3 mt-3 text-sm">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium">{task.name}</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className={overdue && task.status !== "Complete" ? "text-red-600 font-medium" : ""}>
                              {formatDate(task.dueDate)}
                              {task.dueTime && ` at ${formatTime(task.dueTime)}`}
                              {overdue && task.status !== "Complete" && " (Overdue)"}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              task.status === "Complete" 
                                ? "bg-green-100 text-green-800"
                                : task.status === "Still Working" 
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}>
                              {task.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {canEdit && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditStart(task)}
                            className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                            title="Edit task"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => onDeleteTask(task.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            title="Delete task"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>

                    {canEdit && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100">
                        <button
                          onClick={() => onUpdateStatus(task.id, "Still Working")}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            task.status === "Still Working" 
                              ? "bg-yellow-100 text-yellow-800 border border-yellow-200" 
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          Still Working
                        </button>
                        <button
                          onClick={() => onUpdateStatus(task.id, "Not Complete")}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            task.status === "Not Complete" 
                              ? "bg-red-100 text-red-800 border border-red-200" 
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          Not Complete
                        </button>
                        <button
                          onClick={() => onUpdateStatus(task.id, "Complete")}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            task.status === "Complete" 
                              ? "bg-green-100 text-green-800 border border-green-200" 
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          Complete
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskList;