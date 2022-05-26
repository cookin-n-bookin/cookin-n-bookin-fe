export async function getUser() {
  console.log('getUser service');
  return {};
}

export async function signUpUser(username, password) {
  console.log('signUp service');
  return {
    id: 1,
    username: `${username}`,
  };
}

export async function signInUser(username, password) {
  console.log('signIn service');
}

export async function signOutUser() {
  console.log('signOut service');
}
