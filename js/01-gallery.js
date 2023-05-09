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
const GalleryItemMarkup = createGalleryItemsMarkup(galleryItems);
gallery.innerHTML = GalleryItemMarkup;
console.log(galleryItems);
