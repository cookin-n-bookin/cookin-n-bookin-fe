import { Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authentication from './views/Users/Authentication';
import Home from './views/Home/Home';
import AddBook from './views/Books/AddBook';
import BookDetail from './views/Books/BookDetail';

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
        <Route exact path="/home">
          <Home />
        </Route>
        <PrivateRoute exact path="/add">
          <AddBook />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/books/:id">
          <BookDetail />
        </Route>
      </UserProvider>
    </Switch>
  );
}
