import React, { useState } from "react";
import Header from "./components/Header";
import TaskFrom from "./components/TaskFrom";
import TaskList from "./components/TaskList";
const App = () => {
  const [task, setTask] = useState([
    "Complete project documentation",
    "Implement authentication module",
    "Fix UI bugs",
    "Deploy to production",
    "Review code for optimization",
    "Prepare for client presentation",
  ]);
  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const removeTask = (index) => {
    const newTask = task.filter((task) => task !== index);
    setTask(newTask);
  };
  return (
    <>
      <Header />
      <TaskFrom addTask={addTask} />
      <TaskList taskList={task} removeTask={removeTask} />
    </>
  );
};

export default App;
