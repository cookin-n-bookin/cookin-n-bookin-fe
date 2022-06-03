export async function getUser() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return null;
  }
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
  const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
}
