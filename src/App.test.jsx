import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';

describe('App.jsx tests', () => {
  it.skip('should test a user signing up, logging out, and signing in', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const authPageBtn = screen.getByRole('button', { name: /sign in/i });
    userEvent.click(authPageBtn);

    const authHeader = await screen.findByRole('heading', { level: 2 });
    expect(authHeader).toBeInTheDocument();

    const signUpLink = screen.getByRole('link', { name: 'Sign Up' });

    userEvent.click(signUpLink);

    const signUpHeader = await screen.findByRole('heading', {
      name: /sign up/i,
    });
    expect(signUpHeader).toBeInTheDocument();

    const signUpUsernameInput = screen.getByPlaceholderText('Username');
    userEvent.type(signUpUsernameInput, 'TESTY_MCTESTERSON');

    const signUpPasswordInput = screen.getByPlaceholderText('Password');
    userEvent.type(signUpPasswordInput, 'password');

    const signUpSubmit = screen.getByRole('button', { name: /submit/i });

    userEvent.click(signUpSubmit);

    const signUpHomeHeader = await screen.findByRole('heading', { level: 1 });
    expect(signUpHomeHeader).toBeInTheDocument();

    const signoutBtn = screen.getByRole('button', { name: /sign out/i });
    userEvent.click(signoutBtn);

    const authPageBtn2 = await screen.findByRole('button', {
      name: /sign in/i,
    });
    expect(authPageBtn2).toBeInTheDocument();

    userEvent.click(authPageBtn2);

    const authHeader2 = await screen.findByRole('heading', { level: 2 });
    expect(authHeader2).toBeInTheDocument();

    const signInHeader = await screen.findByRole('heading', {
      name: /sign in/i,
    });
    expect(signInHeader).toBeInTheDocument();

    const signInUsernameInput = screen.getByPlaceholderText('Username');
    userEvent.type(signInUsernameInput, 'TESTY_MCTESTERSON');

    const signInPasswordInput = screen.getByPlaceholderText('Password');
    userEvent.type(signInPasswordInput, 'password');

    const signInSubmit = screen.getByRole('button', { name: /submit/i });

    userEvent.click(signInSubmit);

    const homeHeader = await screen.findByRole('heading', { name: /home/i });
    expect(homeHeader).toBeInTheDocument();
  });
});
