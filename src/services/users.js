export async function getUser() {
  console.log('getUser service');
  return {};
}

export async function signUpUser(username, password) {
  const res = await fetch(`${process.env.API_URL}/api/v1/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Invalid username/password');

  return res.json();
}

export async function signInUser(username, password) {
  console.log('signIn service');
  const res = await fetch(`${process.env.API_URL}/api/v1/users/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Invalid username/password');

  return res.json();
}

export async function signOutUser() {
  console.log('signOut service');
}
