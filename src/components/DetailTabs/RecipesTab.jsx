import styles from './StylesTab.css';
import RecipesList from '../Recipes/RecipesList';
import { useRecipes } from '../../hooks/recipes';
import AddRecipeForm from '../Recipes/AddRecipeForm';
import { useAuth } from '../../hooks/user';
// import { useEffect } from 'react';

export default function RecipesTab() {
  const { isAddingRecipe, setIsAddingRecipe, addRecipe} = useRecipes();

  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    setIsAddingRecipe(true);
  };


  const handleSubmit = async () => {
    console.log('tab');
    await addRecipe();
    // setIsAddingRecipe(false);
  }

  if (isAddingRecipe) {
    return (<AddRecipeForm onSubmit={handleSubmit}/>)
  }

  return (
    <div className={styles.recipesTab}>
      { isLoggedIn ? (<button onClick={handleClick}>Add Recipe</button>) : ('')
      }
      <RecipesList />
    </div>
  )
}
