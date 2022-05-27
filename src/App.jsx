import { Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import Authentication from './views/Users/Authentication';
import Home from './views/Home/home';

export default function App() {
  return (
    <Switch>
      <UserProvider>
        <Route exact path="/auth/sign_in">
          <Authentication />
        </Route>
        <Route exact path="/auth/sign_up">
          <Authentication isSigningUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </UserProvider>
    </Switch>
  );
}
