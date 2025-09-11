import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import 'https://cdnjs.cloudflare.com/ajax/libs/css-loader/2.3.0/css-loader.min.css';

const lightbox = new SimpleLightbox('.gallery a', {});

const listEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

export function clearGallery() {
  listEl.textContent = '';
}

export function showLoader() {
  loader.classList.remove('is-hiden');
}

export function hideLoader() {
  loader.classList.add('is-hiden');
}
