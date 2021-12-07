from datetime import timedelta

from fastapi import APIRouter, HTTPException, Depends, status

from fastapi.security import OAuth2PasswordRequestForm

from Todo.apps.documents.documents import Todo, User
from Todo.apps.service.auth import get_password_hash, authenticate_user, create_access_token
from Todo.apps.models.models import Token
from Todo.config import settings

router = APIRouter(prefix="")


@router.post("/signup")
async def signup(user_data: User):
    user_data.password = get_password_hash(user_data.password)
    await user_data.save()


@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=int(settings.ACCESS_TOKEN_EXPIRE_MINUTES))
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/api/create/post", status_code=201, response_model=Todo)
async def create_post(item: Todo ):
    # item.created_by = str(current_user.email)
    return await item.save()


@router.get("/api/get/post/{item_id}")
async def get_post(item_id):
    if item := await Todo.get(item_id):
        return item
    raise HTTPException(status_code=400, detail="not found")


@router.get("/api/get/all/post")
async def find_all_post():
    return await Todo.find_all().to_list()
