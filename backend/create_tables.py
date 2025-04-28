from database import engine, metadata

print("Creating tables...")
metadata.create_all(engine)
print("Done!")
