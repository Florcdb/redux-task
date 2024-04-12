import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";


const App = () => {
  //const [taskInput, setTaskInput] = useState("");
  const tasks = useSelector((state) => state.user.tasks);


  return (
    <>
      <h1> Tareas de hoy</h1>
      <ul>
        <li>Tarea: {tasks}</li>
        <li>Completada </li>
      </ul>
    </>
  );
};

export default App;
