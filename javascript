// Toggle mobile menu
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Contact form validation
const form = document.querySelector("#contactForm");
form.addEventListener("submit", (e) => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name || !email) {
    e.preventDefault();
    alert("Please fill in all required fields.");
  }
});
