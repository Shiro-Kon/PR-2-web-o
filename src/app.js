const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");
const closeNavBtn = document.getElementById("closeNavBtn");

function toggleMobileNav() {
  mobileNav.classList.toggle("hidden");
}

burgerBtn.addEventListener("click", toggleMobileNav);

closeNavBtn.addEventListener("click", toggleMobileNav);

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    toggleMobileNav();
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
