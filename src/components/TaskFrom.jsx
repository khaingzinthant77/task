import React, { useState } from "react";

const TaskFrom = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleTask = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };
  const handleSubmit = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className="p-4">
      <input
        type="text"
        name=""
        id=""
        className="border border-gray-300 py-1 text-sm px-2"
        placeholder="Enter new task..."
        value={task}
        onChange={handleTask}
      />
      <button
        onClick={handleSubmit}
        className="border border-gray-300 py-1 px-3 bg-gray-200 text-sm"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskFrom;
