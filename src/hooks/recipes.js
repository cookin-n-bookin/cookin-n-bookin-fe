import { useState } from 'react';
import {
  fetchAllRecipes,
  updateRecipeById,
  insertRecipe,
} from '../services/recipes';

export default function recipes() {
    const [recipes, setRecipes] = useState([]);
    const [updatedRecipe, setUpdatedRecipe] = useState({});
    const [newRecipe, setNewRecipe] = useState({});

    const getAllRecipes = async () => {
        const fetchedRecipes = await fetchAllRecipes();
        setRecipes(fetchedRecipes);
    };

    const editRecipe = async (id) => {
        const edited = await updateRecipeById(id);
        setUpdatedRecipe(edited);
    };

    const addedRecipe = async () => {
        const added = await insertRecipe();
        setNewRecipe(added);
    }

  return {
      recipes, 
      updatedRecipe, 
      newRecipe,
      getAllRecipes,
      editRecipe,
      addedRecipe,
  };
}
