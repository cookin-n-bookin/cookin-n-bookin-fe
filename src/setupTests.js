import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  MOCKED_USER,
  MOCKED_SIGNUP_RESPONSE,
  MOCKED_SIGNIN_RESPONSE,
  MOCKED_SIGNOUT_RESPONSE,
} from './fixtures/mock-data';

global.fetch = fetch;

const server = setupServer(
  rest.post(`${process.env.API_URL}/api/v1/users/signup`, (req, res, ctx) => {
    return res(ctx.json(MOCKED_SIGNUP_RESPONSE));
  }),
  rest.get(`${process.env.API_URL}/api/v1/users/me`, (req, res, ctx) => {
    return res(ctx.json(MOCKED_USER));
  }),
  rest.post(`${process.env.API_URL}/api/v1/users/signin`, (req, res, ctx) => {
    return res(ctx.json(MOCKED_SIGNIN_RESPONSE));
  }),
  rest.delete(
    `${process.env.API_URL}/api/v1/users/sessions`,
    (req, res, ctx) => {
      return res(ctx.json(MOCKED_SIGNOUT_RESPONSE));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

module.exports = { server };
