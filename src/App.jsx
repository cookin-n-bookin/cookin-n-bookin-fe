import { Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authentication from './views/Users/Authentication';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import AddBook from './views/Books/AddBook';

export default function App() {
  return (
    <Switch>
      <UserProvider>
        <Route exact path="/auth/sign_in">
          <Authentication isSigningUp={false} />
        </Route>
        <Route exact path="/auth/sign_up">
          <Authentication isSigningUp={true} />
        </Route>
        <Route exact path="/books">
          <Home />
        </Route>
        <PrivateRoute exact path="/books/new">
          <AddBook />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>
      </UserProvider>
    </Switch>
  );
}
