window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
  
    document
      .querySelectorAll('.fade-in, .slide-in-up, .slide-in-down, .slide-in-left, .zoom-in')
      .forEach(el => el.classList.add('loaded'));
  });
  