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

  const filteredRecipes = recipes.filter((recipe) => recipe.bookId === id);

  // const handleNotesClick = () => {
  //   {filteredRecipes.notes.map((recipe))}
  // };


  return (
    <>
      <div className={styles.recipes}>
        {filteredRecipes.map((recipe) => {
          return (
            <div className={styles.recipe} key={`${recipe.id}-${recipe.title}`}>
              <h1 className={styles.recipeTitle}>{recipe.title}</h1>
              <p>Page {recipe.pageNumber}</p>
              <div className={styles.recipeTabs}>
              <p>Notes</p>
              <p onClick={() => {recipe.rating}}>Ingredients</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
