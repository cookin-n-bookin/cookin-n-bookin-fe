import { useState } from 'react';
import {
  fetchAllRecipes,
  updateRecipeById,
  insertRecipe,
} from '../services/recipes';

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [updatedRecipe, setUpdatedRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({});
  const [isAddingRecipe, setIsAddingRecipe] = useState(false);

  const getAllRecipes = async () => {
    const fetchedRecipes = await fetchAllRecipes();
    setRecipes(fetchedRecipes);
  };

  const editRecipe = async (id) => {
    const edited = await updateRecipeById(id);
    setUpdatedRecipe(edited);
  };

  const addRecipe = async () => {
    const added = await insertRecipe();
    setNewRecipe(added);
  };

  return {
    recipes,
    updatedRecipe,
    newRecipe,
    getAllRecipes,
    editRecipe,
    addRecipe,
    isAddingRecipe,
    setIsAddingRecipe,
  };
}
