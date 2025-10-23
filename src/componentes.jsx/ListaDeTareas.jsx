import { useEffect, useState } from "react";
import { getTareas,agregarTareas } from "../API/getTareas";

export function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    getTareas()
      .then((data) => setTareas(data))
      .catch((error) => console.error("Error"));
  }, []);

  return (
    <div className="bg-amber-300 text-black text-center">
      <h2 className="text-2xl font-bold text-center texta black mb-4">
        Lista de tareas
      </h2>
      <div>
        <input
          type="text"
          className="bg-amber-700 rounded-md "
          placeholder="Escribe tu tarea"
        />
        <button className="bg-amber-400 text-black font-bold rounded cursor-pointer">Agregar Tarea</button>
      </div>

      <div className="bg-orange-300 text-black">
        <ul>
          {tareas.map((t) => (
            <li key={t.id}>{t.id} {t.descripcion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
