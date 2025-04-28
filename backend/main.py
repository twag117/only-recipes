from fastapi import FastAPI
from database import database, recipes
from pydantic import BaseModel
from typing import List, Optional
import json

class RecipeIn(BaseModel):
    slug: str
    title: str
    description: str
    tags: List[str]
    ingredients: List[str]
    instructions: List[str]
    image_url: Optional[str] = None

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/recipes")
async def get_recipes():
    query = recipes.select()
    rows = await database.fetch_all(query)

    result = []
    for row in rows:
        result.append({
            "id": row["slug"],
            "title": row["title"],
            "description": row["description"],
            "tags": json.loads(row["tags"]),
            "ingredients": json.loads(row["ingredients"]),
            "instructions": json.loads(row["instructions"]),
            "image_url": row["image_url"],
        })

    return result

@app.post("/recipes")
async def create_recipe(recipe: RecipeIn):
    query = recipes.insert().values(
        slug=recipe.slug,
        title=recipe.title,
        description=recipe.description,
        tags=json.dumps(recipe.tags),
        ingredients=json.dumps(recipe.ingredients),
        instructions=json.dumps(recipe.instructions),
        image_url=recipe.image_url,
    )
    await database.execute(query)
    return {"message": "Recipe created successfully"}

