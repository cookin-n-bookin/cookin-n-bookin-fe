import { useState } from 'react';
import useForm from '../../hooks/useForm'

export default function AuthForm({ label, onSubmit }) {
  const { formState, handleChange} = useForm({
    username: '',
    password: ''
  })
  
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const { username, password } = formState;
    try {
      await onSubmit(username, password);
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
          type="username"
          name="username"
          placeholder='Username'
          required
          value={formState.username}
          onChange={handleChange}/>
      </section>

      <section>
        <input 
          type="password"
          name="password"
          placeholder='Password'
          required
          value={formState.password}
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
