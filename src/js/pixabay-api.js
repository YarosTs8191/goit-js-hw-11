import axios from 'axios';

export function fetchImages(query) {
  const API_KEY = '49301647-30570283b511de5f9e60954e8';
  const BASE_URL = 'https://pixabay.com/api/';

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo`)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Помилка запиту:', error);
      return [];
    });
}
