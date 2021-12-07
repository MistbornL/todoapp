from fastapi import APIRouter
from Todo.apps.routers.todoRouter import router as user_router

router = APIRouter()
router.include_router(user_router)
