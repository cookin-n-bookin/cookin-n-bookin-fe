import { useEffect } from 'react';
import { useRecipes } from '../../hooks/recipes';

export default function RecipesList() {
    const { recipes, getAllRecipes } = useRecipes();


  useEffect(() => {
    if (!recipes.length) return null;
    const fetchRecipes = async () => {
      await getAllRecipes();
    };
    fetchRecipes();
  }, []);


  return (
    <>
      <div>RecipesList</div>
      <div>
        {recipes.map((recipe) => {
          return (
            <div>
              <p>{recipe.title}</p>
              <p>{recipe.pageNumber}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
