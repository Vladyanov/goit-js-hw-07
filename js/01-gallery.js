import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsCreate = gallery => {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
           <img
            loading = "lazy"
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
           />
          </a>
        </div>
        `
    )
    .join('');
};

const galleryItemsAdd = () => {
  galleryContainer.innerHTML = galleryItemsCreate(galleryItems);
};

const handleClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const closeModal = e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${e.target.dataset.source}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },

      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );
  instance.show();
};

const modalCreate = () => {
  galleryContainer.addEventListener('click', handleClick);
};

galleryItemsAdd();
modalCreate();
