import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [nameTask, setNameTask] = useState(""); // Estados para actualizar los inputs
  const [descTask, setDescTask] = useState("");
  const { crearTask } = useContext(TaskContext);

  // Manejador de eventos
  const handleSubmit = (e) => {
    e.preventDefault(); // Cancelo el evento por defecto.
    crearTask({
      nameTask,
      descTask
    });
    setNameTask(""); // Reestablecer los valores por defecto. 
    setDescTask(""); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nueva tarea"
          onChange={(e) => setNameTask(e.target.value)}
          value={nameTask}
        />
        <input
          placeholder="Descripcion tarea"
          onChange={(e) => setDescTask(e.target.value)}
          value={descTask}
        />
        <button>Guardar tarea</button>
      </form>
    </div>
  );
}
