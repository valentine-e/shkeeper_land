(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    hideHeaderMenu: document.querySelector(".header"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.hideHeaderMenu.classList.toggle("is-hidden");
  }
})();

let btns = document.querySelectorAll("button");

btns.forEach(function (i) {
  i.addEventListener("click", function () {
    console.log(i);
  });
});
