window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navigation");

  if (window.scrollY > window.innerHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});