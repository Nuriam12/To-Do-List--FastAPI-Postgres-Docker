from sqlalchemy import Column,Integer,String,Boolean,DateTime
from datetime import datetime
from app.DB.database import Base

class Tarea(Base):
    __tablename__ = "tareas"
    id = Column(Integer,primary_key=True,autoincrement=True, index=True)
    descripcion = Column(String, unique=True)
    estado = Column(Boolean,default=False)
    fecha_creacion = Column(DateTime,default=datetime.now)