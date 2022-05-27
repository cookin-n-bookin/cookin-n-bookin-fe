import AuthButton from '../AuthButton/AuthButton'
import { useUser } from '../../hooks/user';

export default function Header() {
  const { currentUser} = useUser();
  
  
  return (
    <>
      <div>Header</div>
      <AuthButton />
    </>
  )
}
