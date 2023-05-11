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

let modal;

gallery.addEventListener("click", onClick);

function onClick(e) {
  console.log("додає слухача");
  e.preventDefault();

  const isIMG = e.target.nodeName === "IMG";
  if (!isIMG) {
    return;
  }

  const imageUrl = e.target.dataset.source;
  modal = basicLightbox.create(`
    <img src="${imageUrl}">
   `);
  modal.show();

  if (modal.show()) {
    window.addEventListener("keydown", closeModalOnEscape);
  }
}

function closeModalOnEscape(e) {
  if (e.code === "Escape" && basicLightbox.visible()) {
    modal.close();
  }
}
