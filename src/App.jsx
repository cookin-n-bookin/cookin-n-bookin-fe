import { Switch, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authentication from './views/Users/Authentication';
import Home from './views/Home/Home';
import AddBook from './views/Books/AddBook';
import BookDetail from './views/Books/BookDetail';
import UsersBooks from './views/Books/UsersBooks';
import About from './views/About/About';

export default function App() {
  return (
    
    <UserProvider>
    <Switch>
        <Route exact path="/books">
          <Home />
        </Route>
        <PrivateRoute exact path="/books/new">
          <AddBook />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>
        <Route exact path="/books/about">
          <About />
        </Route>
        <Route exact path="/books/:id">
          <BookDetail />
        </Route>
        <PrivateRoute exact path="/users/:id/books">
          <UsersBooks />
        </PrivateRoute>
        <Route exact path="/auth/sign_in">
          <Authentication isSigningUp={false} />
        </Route>
        <Route exact path="/auth/sign_up">
          <Authentication isSigningUp={true} />
        </Route>
        </Switch>
      </UserProvider>

  );
}
