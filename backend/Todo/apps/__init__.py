from fastapi import APIRouter
from Todo.apps.service.todoRouter import router as user_router

router = APIRouter()
router.include_router(user_router)
