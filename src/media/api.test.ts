import { mediaItems, API_TOKEN } from '@mocks/data';
import { fetchMediaItems } from './api';

describe('fetchMediaItems', () => {
  test('resolves with array of media items on success', async () => {
    await expect(fetchMediaItems({ token: API_TOKEN })).resolves.toEqual({
      mediaItems,
      nextPageToken: expect.any(String)
    });
  });

  test('rejects with error on failure', async () => {
    await expect(fetchMediaItems({ token: null })).rejects.toThrowError();
  });
});
