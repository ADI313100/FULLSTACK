import sys
from pathlib import Path

project_root = str(Path(__file__).resolve().parent)
if project_root in sys.path:
    sys.path.remove(project_root)

from fastapi import FastAPI

if project_root not in sys.path:
    sys.path.insert(0, project_root)

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI"}

@app.get("/data")
def get_data():
    return {"message": "Get Data"}


@app.post("/data")
def post_data():
    return {"message": "Post Data"}


@app.put("/data")
def put_data(id: int | None = None):
    return {"message": "Put Data", "id": id}


@app.patch("/data")
def patch_data(id: int | None = None):
    return {"message": "Patch Data", "id": id}


@app.delete("/data")
def delete_data(id: int | None = None):
    return {"message": "Delete Data", "id": id}








