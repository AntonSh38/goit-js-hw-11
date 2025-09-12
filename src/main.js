import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  gallery,
} from './js/render-functions.js';

const listEl = document.querySelector('.gallery');
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();

  const inputQuerry = event.currentTarget.elements['search-text'].value.trim();

  getImagesByQuery(inputQuerry)
    .then(response => {
      const photosArr = response;

      if (photosArr.length === 0) {
        iziToast.error({
          title: 'Error',
          message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        });
        return;
      }

      listEl.innerHTML = createGallery(photosArr);
      gallery.refresh();
    })
    .catch(error => {})
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
}

getImagesByQuery('car')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
