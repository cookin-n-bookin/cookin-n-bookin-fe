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

export async function insertRecipe(
  title,
  page_number,
  ingredients,
  rating,
  book_id
) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/recipes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        title,
        pageNumber: page_number,
        ingredients,
        rating,
        bookId: book_id,
      }),
    });
    return res.json();
  } catch (error) {
    return error.message;
  }
}
