// selectors
const openBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// eventlisteners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// functions

function openModal() {
  modal.classList.add("open-modal");
}

function closeModal() {
  modal.classList.remove("open-modal");
}
