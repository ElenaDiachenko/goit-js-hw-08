import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const containerRef = document.querySelector('.gallery');

containerRef.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
  
}

const makeItemMarkup = item => {
    return `
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
  `
}
const makeAllItemMarkup = galleryItems.map(makeItemMarkup)
  .join('\n');

containerRef.insertAdjacentHTML('beforeend', makeAllItemMarkup)