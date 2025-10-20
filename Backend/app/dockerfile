#Imagen
FROM python:3.12-slim

#directorio
WORKDIR /app

#copia archivos del back
COPY . .

#dependencias 
RUN pip install --no-cache-dir -r requirements.txt

#puerto de FastAPI
EXPOSE 8000

#comando de ejecucion
CMD ["uvicorn", "app.main:app","--host","0.0.0.0", "--port","8000"]
