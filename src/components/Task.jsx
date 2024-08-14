import React from "react";

const Task = ({ task, removeTask }) => {
  const handleRemove = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(task);
    }
  };
  return (
    <div className="border border-gray-300 p-2 mb-2 rounded-lg last:mb-0 flex justify-between items-center">
      <p>{task}</p>
      <button
        className="border border-gray-300 px-2 rounded text-sm bg-red-200"
        onClick={handleRemove}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
