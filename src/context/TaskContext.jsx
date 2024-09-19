import { useState, useEffect, createContext } from "react";
import data from "../data/data.json";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // Defino un useSatate que almacenara y actualizara la data
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(data);
  }, []);

  // Defino los metodos que me permitiran crear nuevas tareas y eliminar otras

  const crearTask = (newTask) => {
    // Actualizo el estado con la nueva tarea creada
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        nombre: newTask.nameTask,
        descripcion: newTask.descTask,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTareas([...tareas.filter((t) => t.id !== id)]);
  };

  return (
    <TaskContext.Provider
      value={{
        tareas,
        crearTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
