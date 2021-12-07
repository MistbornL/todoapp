from typing import Optional

from beanie import Document


class User(Document):
    email: str
    password : str


class Todo(Document):
    created_by: Optional[str]
    item: str
    description: Optional[str]
