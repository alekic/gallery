/* eslint-disable @typescript-eslint/no-explicit-any */

export function buildUrl(url: string, queryParams: Record<string, any> = {}) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(queryParams)) {
    if (value != null && value !== '') {
      searchParams.append(key, value.toString());
    }
  }

  return appendQueryString(url, searchParams.toString());
}

function appendQueryString(url: string, queryString: string) {
  return url + (queryString ? `?${queryString}` : '');
}
