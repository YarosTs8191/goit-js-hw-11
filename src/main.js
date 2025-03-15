import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoader,
  hideLoader,
  showError,
} from './js/render-functions.js';

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    showError('Please enter a search term!');
    return;
  }

  showLoader();
  fetchImages(query)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      renderImages(images);
    })
    .catch(error => {
      hideLoader();
      console.error('Помилка отримання даних:', error);
    });
});
