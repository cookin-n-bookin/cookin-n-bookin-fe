const MOCKED_USER = {
  id: '8',
  username: 'TESTY_MCTESTERSON',
  iat: 1654026057,
  exp: 1654112457,
};

const MOCKED_SIGNUP_RESPONSE = {
  user: { id: '8', username: 'TESTY_MCTESTERSON' },
  message: 'Signed up successfully!',
};

const MOCKED_SIGNIN_RESPONSE = {
  user: { id: '8', username: 'TESTY_MCTESTERSON' },
  message: 'Signed in successfully!',
};

const MOCKED_SIGNOUT_RESPONSE = { message: 'Successfully signed out' };

module.exports = {
  MOCKED_USER,
  MOCKED_SIGNUP_RESPONSE,
  MOCKED_SIGNIN_RESPONSE,
  MOCKED_SIGNOUT_RESPONSE,
};
