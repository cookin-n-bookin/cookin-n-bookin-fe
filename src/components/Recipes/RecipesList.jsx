import { useEffect } from 'react';
import { useRecipes } from '../../hooks/recipes';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

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
      <div>RecipesList</div>
      <div>
        {filteredRecipes.map((recipe) => {
          return (
            <div key={`${recipe.id}-${recipe.title}`}>
              <p>{recipe.title}</p>
              <p>{recipe.pageNumber}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
