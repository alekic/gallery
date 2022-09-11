import { rest } from 'msw';
import { API_TOKEN, mediaItems } from './data';

export const handlers = [
  rest.get(
    'https://photoslibrary.googleapis.com/v1/mediaItems',
    (request, response, context) => {
      const isAuthorized = authorize(request.headers.get('Authorization'));

      if (!isAuthorized) {
        return response(context.status(401));
      }

      return response(
        context.status(200),
        context.json({
          mediaItems,
          nextPageToken: 'CkgKQnR5cGUuZ29vZ2xlYXBpcy5jb20v'
        })
      );
    }
  )
];

function authorize(header: string | null) {
  if (!header) {
    return false;
  }

  const [, token] = header.split(' ');

  return !!token && token === API_TOKEN;
}
