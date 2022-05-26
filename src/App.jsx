import { Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import Authentication from './views/Users/Authentication';

export default function App() {
  return (
    <Switch>
      <UserProvider>
        <Route exact path="/auth">
          <Authentication />
        </Route>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
      </UserProvider>
    </Switch>
  );
}
