from databases import Database
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Text

DATABASE_URL = "sqlite:///./onlyrecipes.db"

database = Database(DATABASE_URL)
metadata = MetaData()
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Recipes table
recipes = Table(
    "recipes",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("slug", String(100), unique=True, nullable=False),
    Column("title", String(200), nullable=False),
    Column("description", Text, nullable=False),
    Column("ingredients", Text, nullable=False),   # store as JSON text
    Column("instructions", Text, nullable=False),  # store as JSON text
    Column("tags", Text, nullable=False),          # store as JSON text
    Column("image_url", String(300), nullable=True),
)

# Favorites table
favorites = Table(
    "favorites",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("user_id", String(100), nullable=False),
    Column("recipe_id", Integer, nullable=False),
)
