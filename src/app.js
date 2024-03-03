document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

var scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

const btnMenuBurger = document.getElementById("btn");

btnMenuBurger.addEventListener("click", function () {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  menuContainer.innerHTML = `
          <ul>
              <li><a href="#burgers" class="text-blue-500 menu-link">Бургери</a></li>
              <li><a href="#contacts" class="text-blue-500 menu-link">Контакти</a></li>
          </ul>
          <button id="closeBtn">Close</button>
      `;

  menuContainer.style.position = "fixed";
  menuContainer.style.top = "0";
  menuContainer.style.right = "-300px";
  menuContainer.style.width = "300px";
  menuContainer.style.height = "200px";
  menuContainer.style.backgroundColor = "#090f0d";
  menuContainer.style.padding = "20px";
  menuContainer.style.color = "white";
  menuContainer.style.transition = "right 0.3s ease-in-out";

  const closeBtn = menuContainer.querySelector("#closeBtn");
  closeBtn.style.cursor = "pointer";
  closeBtn.style.marginTop = "10px";

  closeBtn.addEventListener("click", function () {
    menuContainer.style.right = "-300px";
    setTimeout(() => {
      document.body.removeChild(menuContainer);
    }, 300);
  });

  document.body.appendChild(menuContainer);

  menuContainer.getBoundingClientRect();
  menuContainer.style.right = "0";

  const menuLinks = menuContainer.querySelectorAll(".menu-link");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      menuContainer.style.right = "-300px";
      setTimeout(() => {
        document.body.removeChild(menuContainer);
      }, 300);
    });
  });
});
