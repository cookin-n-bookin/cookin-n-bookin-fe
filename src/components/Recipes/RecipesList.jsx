import { useState, useEffect } from 'react';
import { useUser } from '../../hooks/user';
import { fetchAllRecipes } from '../../services/recipes';

export default function RecipesList() {
  const { recipes, setRecipes } = useState();
  const { setIsLoading } = useUser();

  useEffect(() => {
    const getRecipes = async () => {
      setIsLoading(true);
      await fetchAllRecipes();
      setIsLoading(false);
    };
    getRecipes();
  }, []);


  return (
    <>
      <div>RecipesList</div>
      {/* <div>
        {recipes.map((recipe) => {
          return (
            <div>
              <p>{recipe.title}</p>
              <p>{recipe.pageNumber}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}
