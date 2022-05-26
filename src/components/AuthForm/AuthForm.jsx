import useForm from '../../hooks/useForm'

export default function AuthForm({ label, onSubmit }) {
  const { formState, handleChange} = useForm({
    username: '',
    password: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const { username, password } = formState;
    try {
      await onSubmit(username, password);
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}>
      <section>
        <label>Username</label>
        <input 
          type="username"
          name="username"
          required
          value={formState.username}
          onChange={handleChange}/>
      </section>

      <section>
        <label>Password</label>
        <input 
          type="password"
          name="password"
          required
          value={formState.password}
          onChange={handleChange}/>
      </section>

      <button 
      type='submit'
      onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}
