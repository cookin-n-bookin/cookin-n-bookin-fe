import { useEffect } from 'react';
import { useRecipes } from '../../hooks/recipes';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Recipes.css';

export default function RecipesList() {
    const { recipes, getAllRecipes } = useRecipes();
    const { id } = useParams();

    useEffect(() => {
    if (recipes.length) return null;

    const fetchRecipes = async () => {
      await getAllRecipes();
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => recipe.bookId === id) 
  
  return (
    <>
      <div className={styles.recipes}>
        {filteredRecipes.map((recipe) => {
          return (
            <div key={`${recipe.id}-${recipe.title}`}>
              <h1 className={styles.recipeTitle}>{recipe.title}</h1>
              <p>Page {recipe.pageNumber}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
