import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryItemsAdd();
modalCreate();


function galleryItemsCreate(gallery) {
    return gallery.map(({ preview, original, description }) => 
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
    ).join('');
}

function galleryItemsAdd() {
    galleryContainer.innerHTML = galleryItemsCreate(galleryItems);
} 

function handleClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`).show(); 

    closeModalEscBtn(instance);
}

function modalCreate() {
    galleryContainer.addEventListener('click', handleClick);
}

// закрытие модалки по ESC

function closeModalEscBtn(modal) {
    if (basicLightbox.visible()) {
        document.addEventListener('keypress', e => {
            if (e.code === 'Escape') {
            modal.close();
        }
    }); 
    }
}




