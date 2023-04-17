import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

const createMarkup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join("");

list.insertAdjacentHTML("afterbegin", createMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

console.table(galleryItems); 
