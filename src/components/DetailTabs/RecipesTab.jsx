import styles from './StylesTab.css';
import RecipesList from '../Recipes/RecipesList';
import { useRecipes } from '../../hooks/recipes';
import AddRecipeForm from '../Recipes/AddRecipeForm';
import { useAuth } from '../../hooks/user';
import { insertRecipe } from '../../services/recipes';
import toast from 'react-hot-toast';

export default function RecipesTab() {
  const { isAddingRecipe, setIsAddingRecipe } = useRecipes();
  

  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    setIsAddingRecipe(true);
  };


  const handleAddRecipe = async (title, page_number, ingredients, rating, book_id) => {
    try {
      await insertRecipe(title, page_number, ingredients, rating, book_id);
      setIsAddingRecipe(false)
      toast('Recipe Added!')
    } catch (error) {
      return error.message
    }
  }

  if (isAddingRecipe) {
    return (<AddRecipeForm onSubmit={handleAddRecipe}/>)
  }

  return (
    <div className={styles.recipesTab}>
      <RecipesList />
      { isLoggedIn ? (<button className={styles.addRecipeButton} onClick={handleClick}>Add Recipe</button>) : ('')
      }
    </div>
  )
}
