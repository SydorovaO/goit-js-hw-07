import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="Image description"
      />
    </a>
  </li>`;
    })
    .join("");
}

const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItemMarkup);
console.log(galleryItems);

gallery.addEventListener("click", onClick);
function onClick(e) {
  e.preventDefault();
  const isIMG = e.target.nodeName === "IMG";
  if (!isIMG) {
    return;
  } else {
    const bigIMG = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${bigIMG}">
   `);

    instance.show();
  }
}
