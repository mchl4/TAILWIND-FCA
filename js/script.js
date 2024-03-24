const optionsNav = document.querySelectorAll(".options__nav__link");
const optionsContent = document.querySelectorAll(".options__item");
optionsNav.forEach((options) => {
  options.addEventListener("click", () => {
    removeActiveStar();
    options.classList.add("active");
    const activeContent = document.querySelector(`#${options.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  optionsNav.forEach((options) => {
    options.classList.remove("active");
  });
}
function removeActiveContent() {
    optionsContent.forEach((content) => {
      content.classList.remove("active");
    });
  }

const burgerbtn = document.querySelector(".burger__menu");
const headerA = document.querySelector("nav");
burgerbtn.addEventListener("click", () => {
  burgerbtn.classList.toggle("open");
  headerA.classList.toggle("open");
});

const links = document.querySelectorAll(".options__text > h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});