import { galleryItems } from './gallery-items.js'; 
// Change code below this line
const list = document.querySelector(".gallery");


const itemGal = galleryItems.map(({original, preview, description}) => 
    `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join("");

list.insertAdjacentHTML("afterbegin", itemGal);


list.addEventListener("click", onClick);

function onClick (evt){
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image")){
        return;
    }
    console.dir(evt.target);

    const {alt} = evt.target;
    const {source} = evt.target.dataset;

    
    const instance = basicLightbox.create(`
    <img src="${source}" alt="${alt}">`, {
        onShow: () => document.addEventListener("keydown",onkeydown),
        onClose: () => document.removeEventListener("keydown",onkeydown)
    })

    const onkeydown = (evt)=>{
        if(evt.code === "Escape"){
            instance.close();
        }
    }
    instance.show();
}

console.log(galleryItems);
