import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    delay,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const query = e.target.elements['search-text'].value.trim();

    if (!query) {
    iziToast.error({
        message: 'Please enter a search query!',
    });
    return;
    }

    clearGallery();
    showLoader();

    try {
    const data = await getImagesByQuery(query);

    await delay(500);

    if (data.hits.length === 0) {
        iziToast.error({
        message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }

    createGallery(data.hits);
    } catch (error) {
    iziToast.error({
        message: 'Error fetching images',
    });
    } finally {
    hideLoader();
    }
});
