import React from "react";
import Task from "./Task";
const TaskList = ({ taskList, removeTask }) => {
  return (
    <div className="p-4">
      {taskList.map((task) => (
        <Task task={task} key={task} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
