import styles from './StylesTab.css';
import RecipesList from '../Recipes/RecipesList';

export default function RecipesTab() {
  return (
    <div className={styles.recipesTab}>
      <button>Add Recipe</button>
      <RecipesList />
    </div>
  )
}
