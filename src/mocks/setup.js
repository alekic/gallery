import { beforeAll, afterEach, afterAll } from '@jest/globals';
import fetch from 'node-fetch';
import { server } from './server';

global.fetch = fetch;

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
