from pydantic import BaseModel
from datetime import datetime

class UpdateTarea(BaseModel):
    descripcion : str
    estado : bool
    fecha_creacion : datetime


class ShowTarea(BaseModel):
    id : int
    descripcion : str
    estado : bool
    fecha_creacion : datetime