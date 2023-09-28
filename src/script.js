function navbar() {
  const small_navbar = document.querySelector("#small_navbar");
  const navbar_controller_btn = document.querySelector(
    "#navbar_controller_btn"
  );

  navbar_controller_btn.addEventListener("click", () => {
    small_navbar.classList.toggle("hidden");
  });
}

function slider() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function main() {
  navbar();
  slider();
}

window.onload = main;
