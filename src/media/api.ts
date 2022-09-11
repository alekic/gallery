import { buildUrl } from '@utils/url';
import { MediaItemsResponse } from './types';

export type Options = {
  pageSize?: number;
  pageToken?: string;
  token: string | null;
};

export function fetchMediaItems({
  pageSize,
  pageToken,
  token
}: Options): Promise<MediaItemsResponse> {
  const url = buildUrl('https://photoslibrary.googleapis.com/v1/mediaItems', {
    pageSize,
    pageToken
  });

  return fetch(url, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Request failed with status code ${response.status}: ${response.statusText}`
      );
    }
    return response.json();
  });
}
