const API_URL = "http://localhost:8000";

//mostramos las tareas
export async function getTareas() {
  const response = await fetch(`${API_URL}/tareas/`);
  if (!response.ok) {
    throw new Error("Error al obtener tareas");
  }
  const data = await response.json();
  return data;
}
//enviamos tareas al servidor
export async function agregarTareas(nuevaTarea){
  const response = await fetch (`${API_URL}/tareas/`,{
    method:"POST",
    headers: {"Content-Type":"application/json"},
  body:JSON.stringify(nuevaTarea) //convertimos "nuevaTarea"en una cadena JSON PARA ENVIARLA AL SERVIDOR
});
    if (!response.ok) {
    throw new Error("Error al agregar tarea");
  }
return response.json()
}

//eliminamos Tareas 

export async function eliminarTarea(id){
  const response = await fetch (`${API_URL}/tareas/${id}`,{
    method:"DELETE",
  });
  if (!response.ok){
    throw new Error("tarea no encontrada")
  }
  return {"respuesta" : "Tarea eliminada pta"}

}