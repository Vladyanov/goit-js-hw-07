import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsCreate = gallery => {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    )
    .join('');
};

const galleryItemsAdd = () => {
  galleryContainer.innerHTML = galleryItemsCreate(galleryItems);
};

const handleClick = e => {
  e.preventDefault();

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};

const modalCreate = () => {
  galleryContainer.addEventListener('click', handleClick);
};

galleryItemsAdd();
modalCreate();
