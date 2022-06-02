export async function fetchAllRecipes() {
    const res = await fetch(`${process.env.API_URL}/api/v1/recipes`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
      });
    const results = await res.json();
    return results;
  }
  
  export async function updateRecipeById(id) {
    try {
      const res = await fetch(`${process.env.API_URL}/api/v1/recipes/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        mode: 'cors',
      });
      return res.json();
    } catch (error) {
      return error.message;
    }
  }

  export async function insertRecipe() {
    try {
      const res = await fetch(`${process.env.API_URL}/api/v1/recipes/`, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
      });
      return res.json();
    } catch (error) {
      return error.message;
    }
  }


