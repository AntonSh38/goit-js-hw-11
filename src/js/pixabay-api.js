export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const API_KEY = '52236673-dfbbe0e7dd19cbeb92e7645c8';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json().then(data => {
      return data.hits;
    });
  });
}
