const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// old

// const tabs = document.querySelector(".use__wrapper");
// const tabButton = document.querySelectorAll(".tab-button");
// const contents = document.querySelectorAll(".content");

// tabs.onclick = (e) => {
//   const id = e.target.dataset.id;
//   if (id) {
//     tabButton.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");

//     contents.forEach((content) => {
//       content.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// };
