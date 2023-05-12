import { galleryItems } from "./gallery-items.js";

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

gallery.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  const isIMG = e.target.nodeName === "IMG";
  if (!isIMG) {
    return;
  }

  const imageUrl = e.target.dataset.source;
  const modal = basicLightbox.create(`
    <img src="${imageUrl}">
   `);
  modal.show();

  window.addEventListener("keydown", closeModalOnEscape);

  function closeModalOnEscape(e) {
    if (e.code === "Escape") {
      modal.close();
    }
  }
}
