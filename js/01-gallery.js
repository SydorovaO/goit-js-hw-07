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
gallery.innerHTML = galleryItemMarkup;
// const itemsEl = gallery.querySelectorAll(".gallery__item");
// const linksEl = gallery.querySelectorAll(".gallery__link");

console.log(gallery);
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  console.dir(e.target.nodeName);
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="assets/images/image.png" width="800" height="600">
`);

  instance.show();
});
// gallery.addEventListener("click", onClick);
// function onClick(e) {
//   console.log(e.target);
// }

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// console.log(galleryItems);

//
// console.log(item);
const ooo = gallery.querySelectorAll(".gallery__image");
