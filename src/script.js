function navbar() {
  const small_navbar = document.querySelector("#small_navbar");
  const navbar_controller_btn = document.querySelector(
    "#navbar_controller_btn"
  );

  navbar_controller_btn.addEventListener("click", () => {
    small_navbar.classList.toggle("hidden");
  });
}

function main() {
  navbar();
}

window.onload = main;
