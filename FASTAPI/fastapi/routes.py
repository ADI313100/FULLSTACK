import sys
from pathlib import Path

project_root = str(Path(__file__).resolve().parent.parent)
if project_root in sys.path:
    sys.path.remove(project_root)

from fastapi import APIRouter, FastAPI

if project_root not in sys.path:
    sys.path.insert(0, project_root)

router = APIRouter()


@router.get("/users")
def get_users():
    return {"message": "List of users"}


app = FastAPI()
app.include_router(router)

