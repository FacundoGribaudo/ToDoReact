import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}
