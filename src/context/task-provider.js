import React, { createContext, useState, useContext } from "react";

// 1. Cria o Context
const TasksContext = createContext();

// 2. Cria o Provider
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text }]);
    }
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

// 3. Cria o Custom Hook para fácil uso do Context
export const useTasks = () => {
  return useContext(TasksContext);
};
