// =======================
// Configuration
// =======================
const CONFIG = {
  PHONE_NUMBER: "44991148553"
};

// =======================
// DOM Elements
// =======================
const nameInput = document.getElementById("input-name");
const messageInput = document.getElementById("input-message");
const contactForm = document.getElementById("contact-form");

// =======================
// Event Handlers
// =======================
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const text = `Hello, my name is ${name}. ${message}`;
  const encodedText = encodeURIComponent(text);

  const whatsappUrl = `https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodedText}`;

  window.open(whatsappUrl, "_blank");
});
