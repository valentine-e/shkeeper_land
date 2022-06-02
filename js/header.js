window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").style.backgroundColor =
      "rgba(33, 50, 58, 0.85)";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
}
