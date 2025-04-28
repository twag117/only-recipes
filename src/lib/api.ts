export async function fetchRecipes() {
    const res = await fetch('http://127.0.0.1:8000/recipes');
    if (!res.ok) {
      throw new Error('Failed to fetch recipes');
    }
    return res.json();
  }
  