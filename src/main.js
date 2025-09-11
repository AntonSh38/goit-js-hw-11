import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

getImagesByQuery('car')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
