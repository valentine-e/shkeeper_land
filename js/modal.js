const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  hideHeaderMenu: document.querySelector(".header"),
};

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  refs.hideHeaderMenu.classList.toggle("is-hidden");
}

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});
