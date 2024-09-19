import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard() {
  // Cargo el contexto que necesito utilizar
  const { tareas, deleteTask } = useContext(TaskContext);

  if (tareas.length === 0) {
    return <h1>No hay tareas creadas !</h1>;
  }

  return (
    <>
      {tareas.map((t) => (
        <div key={t.id}>
          <h1>{t.nombre}</h1>
          <h3>{t.descripcion}</h3>
          <button onClick={(e) => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
