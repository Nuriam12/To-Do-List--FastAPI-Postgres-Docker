from fastapi import FastAPI
from app.DB.database import Base, engine
from app.crud import router
from app.DB.models import Tarea
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],

)

app.include_router(router)

def create_tables():
    Base.metadata.create_all(bind=engine)
    print("Tablas creadas (si no existían)")
create_tables()




 