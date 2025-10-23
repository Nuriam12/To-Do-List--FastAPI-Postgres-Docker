from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from app.DB.database import Base,get_DB
from app.DB.models import Tarea
from app.schemas import ShowTarea,UpdateTarea
from typing import List


router = APIRouter(
    prefix="/tareas",
    tags=["Tareas"]
)

@router.post('/')
def crear_tarea(descripcion: str,DB:Session = Depends(get_DB)):
    nueva_tarea = Tarea(descripcion=descripcion)
    DB.add(nueva_tarea)
    DB.commit()
    DB.refresh(nueva_tarea)
    return nueva_tarea

@router.get('/', response_model=List[ShowTarea])
def mostrar_tareas(DB:Session = Depends(get_DB)):
    data = DB.query(Tarea).all()
    return data

@router.delete('/{id}')
def eliminar_tarea(id:int, DB:Session = Depends(get_DB)):
    eliminar = DB.query(Tarea).filter(Tarea.id == id).first()
    DB.delete(eliminar)
    DB.commit()
    return {"respuesta" : "Tarea eliminada pta"}

@router.put('/{id}',response_model=ShowTarea)
def actualizar_tarea(id:int,descripcion:str = None,estado:bool=None,DB:Session = Depends(get_DB)):
    actualizar = DB.query(Tarea).filter(Tarea.id == id).first()
    if descripcion is not None :
        actualizar.descripcion = descripcion
    if estado is not None :
        actualizar.estado = estado
    DB.commit()
    DB.refresh(actualizar)
    return actualizar
