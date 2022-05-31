import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Authentication from './views/Users/Authentication';
import App from './App';

describe('App.jsx tests', () => {
  it('should test a user signing up, logging out, and signing in', async () => {
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
    console.log('signUpHeader', signUpHeader);

    const usernameInput = screen.getByPlaceholderText('Username');
    userEvent.type(usernameInput, 'TestName');

    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'password');

    const submitBtn = screen.getByRole('button', { name: /submit/i });

    userEvent.click(submitBtn);

    screen.debug();
  });
});
