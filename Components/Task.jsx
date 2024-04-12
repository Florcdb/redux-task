// Task.js
import { useDispatch } from "react-redux";
import { addTask, deleteTask } from "../redux/todosSlice";

const useTaskFunctions = () => {
  const dispatch = useDispatch();

  const handleAddTask = (taskInput, setTaskInput) => {
    dispatch(addTask({ task: taskInput }));
    setTaskInput("");
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ taskId }));
  };

  return { handleAddTask, handleDeleteTask };
};

export default useTaskFunctions;
