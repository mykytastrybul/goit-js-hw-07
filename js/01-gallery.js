import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarkup = (items) => {
  return items.map(({ preview, original, description }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join("");
}
gallery.innerHTML = galleryMarkup(galleryItems);
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  event.target.classList.contains("gallery__image");
  openModal(event);
})
const openModal = (event) => {
  const origImg = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${origImg}">`, {
    onShow: () => {
      window.addEventListener("keydown", closeModal);
    },
    onClose: () => {
      window.removeEventListener("keydown", closeModal);
    }
  })
  const closeModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}