// const images = document.querySelectorAll(".gallery__items img");
// const modalImage = document.querySelector("#modalImage");
// const modal = document.querySelector("#modal");
// const closeButton = document.querySelector("#close");

// images.forEach(image => image.addEventListener("click", imageClick));

// const onClose = () => {
//   modal.style.display = "none";
//   document.body.style.overflow = "auto";
// };

// function imageClick(e) {
//   modalImage.src = e.target.src;
//   modal.style.display = "flex";
//   document.body.style.overflow = "hidden";
// }

// closeButton.addEventListener("click", onClose);

class UI {
  constructor() {
    this.modalImage = document.querySelector("#modalImage");
    this.modal = document.querySelector("#modal");
  }

  onClose() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  imageClick(e) {
    modalImage.src = e.target.src;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function eventListeners() {
  const images = document.querySelectorAll(".gallery__items img");
  const closeButton = document.querySelector("#close");

  const ui = new UI();

  closeButton.addEventListener("click", function() {
    ui.onClose();
  });

  images.forEach(image =>
    image.addEventListener("click", function(e) {
      ui.imageClick(e);
    })
  );
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
