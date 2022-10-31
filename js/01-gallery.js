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

    function closeModal(e) {
      if (e.code === 'Escape') {
        instance.close();
      }
    };
    
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${getOriginalImg(e)}">`,
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
}

function getOriginalImg(e) {
    return e.target.dataset.source; 
}


function modalCreate() {
    galleryContainer.addEventListener('click', handleClick);
}

