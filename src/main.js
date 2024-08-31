import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './Js/pixabay-api.js';
import { galleryMarkup } from './Js/render-function.js';

const form = document.querySelector('.form');
const queryInput = document.querySelector('input[name="query"]');

const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

const showMoreBtn = document.querySelector('.show-more');

iziToast.settings({
  messageColor: '#fafafb',
  position: 'bottomRight',
  backgroundColor: '#ef4040',
  iconColor: '#fafafb',
  close: false,
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
let tags = '';
let page = 1;
let images;
let quantityPages;
const perPage = 15;

const onForm = async event => {
  event.preventDefault();
  tags = queryInput.value.trim();
  if (tags === '') {
    iziToast.show({
      message: 'Please enter a search query.',
    });
    return;
  }

  gallery.innerHTML = '';
  page = 1;
  loader.classList.remove('visually-hidden');
  showMoreBtn.classList.add('visually-hidden');

  try {
    images = await fetchData(tags, page);
    quantityPages = Math.ceil(images.total / perPage);

    if (images.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.classList.add('visually-hidden');
      return;
    }

    if (quantityPages <= 1) {
      showMoreBtn.classList.add('visually-hidden');
    } else {
      showMoreBtn.classList.remove('visually-hidden');
    }

    galleryMarkup(images.hits);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add('visually-hidden');
    form.reset();
  }
};

const onBtn = async () => {
  page += 1;

  try {
    showMoreBtn.classList.add('visually-hidden');
    loader.classList.remove('visually-hidden');

    images = await fetchData(tags, page);
    galleryMarkup(images.hits);
    lightbox.refresh();

    const galleryEl = document.querySelector('.gallery-item');

    const galleryElHeight = galleryEl.getBoundingClientRect().height;

    window.scrollBy({
      top: galleryElHeight * 2,
      behavior: 'smooth',
    });

    if (images.total <= Math.ceil(page * perPage)) {
      showMoreBtn.classList.add('visually-hidden');
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showMoreBtn.classList.remove('visually-hidden');
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add('visually-hidden');
  }
};

form.addEventListener('submit', onForm);
showMoreBtn.addEventListener('click', onBtn);
