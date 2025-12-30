// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-open");
  });

  navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navList.classList.remove("nav-open");
    }
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Fake contact form handler (front-end only)
function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  if (status) {
    status.textContent = "Thanks! This demo form doesn’t send yet. Connect it to Formspree, Netlify, or your own backend when you’re ready.";
  }
}
