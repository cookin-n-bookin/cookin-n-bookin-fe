import useForm from '../../hooks/useForm';
import { useRecipes } from '../../hooks/recipes';
import { useState } from 'react';


export default function AddRecipeForm({ label, onSubmit }) {
    const { formState, handleChange } = useForm({
        title: '', 
        page_number: '',
        ingredients: '',
        rating: ''
    });

    // const { setIsAddingRecipe } = useRecipes();

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const { title, page_number, ingredients, rating } = formState;
        try {
          await onSubmit(title, page_number, ingredients, rating);
        } catch (error) {
          setError(error)
        }
      }

  return (
    <>
    <form
      aria-label='form'
      onSubmit={handleSubmit}>
      <section>
        <input 
          type="text"
          name="title"
          placeholder='Recipe Title'
          required
          value={formState.title}
          onChange={handleChange}/>
      </section>

      <section>
        <input 
          type="number"
          name="page_number"
          placeholder='Page Number'
          required
          value={formState.page_number}
          onChange={handleChange}/>
      </section>

      <section>
        <input 
          type="text"
          name="ingredients"
          placeholder='Ingredients'
          required
          value={formState.ingredients}
          onChange={handleChange}/>
      </section>

      <section>
        <input 
          type="number"
          name="rating"
          placeholder='Rating from 1-5'
          required
          value={formState.rating}
          onChange={handleChange}/>
      </section>

      <button 
      type='submit'
      onSubmit={handleSubmit}>Submit</button>
    </form>
    <p>{error.message}</p>
    </>
  )
}
