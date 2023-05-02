const elScrollable = document.querySelector("html")
const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu__link");

const handleHeader = () => {
  const viewportHeight = window.innerHeight;
  const scrollTop = elScrollable.scrollTop;
  header.classList.toggle("header_scrolled", scrollTop >= viewportHeight);
  for (menuLink of menuLinks) {
    menuLink.classList.toggle("menu__link_scrolled", scrollTop >= viewportHeight);
  };
};

addEventListener("scroll", handleHeader);
addEventListener("resize", handleHeader);
handleHeader();