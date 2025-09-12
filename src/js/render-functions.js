import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import 'https://cdnjs.cloudflare.com/ajax/libs/css-loader/2.3.0/css-loader.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const listEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

export function createGallery(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
          <div class="info">
            <div class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${likes}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${views}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${comments}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${downloads}</span>
            </div>
          </div>
        </a>
      </li>`;
      }
    )
    .join('');
}

export function clearGallery() {
  listEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
