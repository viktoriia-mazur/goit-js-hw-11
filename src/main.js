import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', async e => {
        e.preventDefault();

        const query = e.target.elements['search-text'].value.trim();

        if (!query) {
            iziToast.warning({
                title: 'Caution',
                message: 'Please enter a search query!',
                position: 'topRight',
            });
            return;
        }

        clearGallery();
        showLoader();

        try {
            const data = await getImagesByQuery(query);

            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'No Results',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }

            createGallery(data.hits);
        } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.',
                position: 'topRight',
            });
        } finally {
            hideLoader();
        }
    });
}
