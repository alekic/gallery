import { API_TOKEN, mediaItems } from '@mocks/data';
import { renderHook, waitFor } from '@test-utils';
import useMediaItems from './useMediaItems';

test('returns data on success', async () => {
  const { result } = renderHook(() => useMediaItems(), {
    authProviderProps: {
      token: API_TOKEN
    }
  });

  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual({
      mediaItems,
      nextPageToken: expect.any(String)
    });
  });
});

test('returns error on failure', async () => {
  const { result } = renderHook(() => useMediaItems(), {
    authProviderProps: {
      token: null
    }
  });

  await waitFor(() => {
    expect(result.current.isError).toBe(true);
    expect(result.current.error?.message).toMatch(/unauthorized/i);
  });
});
